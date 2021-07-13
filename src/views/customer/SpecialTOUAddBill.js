import React, { useState } from "react";
import CalculateBillForm from "./CalculateBillForm";
import { Paper, makeStyles } from "@material-ui/core";
import UseTable from "../../components/Customer/UseTable";
import * as DeviceBill from "./DeviceBill";
import { TableBody } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import "../../assets/css/Customer/billCalculate.css";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Popup from "../../components/Customer/bill_control/Popup";
import { DeleteOutline } from "@material-ui/icons";
import { EditOutlined } from "@material-ui/icons";
import Notification from "../../components/Customer/bill_control/Notification";
import ConfirmDialog from "../../components/Customer/bill_control/ConfirmDialog";
import { Link } from "react-router-dom";
import "../../assets/css/breadcrumb.css"
import { Col, Form, Row } from "react-bootstrap";
import "../../assets/css/Customer/specialEvent.css"


const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
  Rowinform: {
    margin: "10px"
}
}));

const headCells = [
  { id: "appliance", label: "Appliance" },
  { id: "quantity", label: "Quantity" },
  { id: "power", label: "Power" },
  { id: "priority", label: "Priority" },
  { id: "hPeak", label: "Peak Hour" },
  { id: "hOffPeak", label: "Off Peak Hour" },
  { id: "hDay", label: "Day Hour" },
  { id: "action", label: "Actions" },
];

let noOfDays = 1;
const noOfUnitPeak = 20;
const noOfUnitOffPeak = 13;
const noOfUnitDay = 17;
const addtionalChargeBill = 1231;
  
export default function SpecialTOUAddBill() {
    const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(DeviceBill.getAllDevices());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    variant: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    UseTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.appliance.toLowerCase().includes(target.value.toLowerCase())
          );
      },
    });
  };

  const addOrEdit = (device, resetForm) => {
    if (device.id == 0) {
      DeviceBill.insertDevice(device);
    } else {
      console.log(device.id);
      DeviceBill.updateDevice(device);
    }

    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(DeviceBill.getAllDevices());
    setNotify({
      isOpen: true,
      message: "Submitted Successfully",
      variant: "success",
    });
  };

  const openInPopup = (item) => {
    console.log(item.id);
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const onDeletedevice = (appliance) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    DeviceBill.Deletedevice(appliance);
    setRecords(DeviceBill.getAllDevices());
    setNotify({
      isOpen: true,
      message: "Deleted Successfully",
      variant: "danger",
    });
  };

    return (
        <div>
            <Paper className={classes.pageContent}>
        <h2>Your Device Data</h2>
        <Toolbar>
          <TextField
            label="Search Device"
            className="Search-bar-in-form"
            onChange={handleSearch}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <button
            type="button"
            className="btn btn-info add-new-button"
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          >
            <Add />
            Add New
          </button>
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.appliance}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.power}</TableCell>
                <TableCell>{item.priority}</TableCell>
                <TableCell>
                  {item.hPeak}h & {item.mPeak} min
                </TableCell>
                <TableCell>
                  {item.hOffPeak}h & {item.mOffPeak} min
                </TableCell>
                <TableCell>
                  {item.hDay}h & {item.mDay} min
                </TableCell>
                <TableCell>
                  <button
                    className="btn editActionButtonIcon"
                    onClick={() => {
                      openInPopup(item);
                    }}
                  >
                    <EditOutlined
                      fontSize="small"
                      ClassName={classes.actionButtonIcon}
                    />
                  </button>
                  <button
                    className="btn deleteActionButtonIcon"
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: "Are You sure delete this record",
                        subTitle: "You can't  undo this operation",
                        onConfirm: () => {
                          onDeletedevice(item.appliance);
                        },
                      });
                    }}
                  >
                    <DeleteOutline
                      fontSize="small"
                      ClassName={classes.actionButtonIcon}
                    />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
        <Paper className={classes.pageContent}>
        
          <Form className="main-calculate-form">
            <Form.Group>
              <Row className="RowInForm-noOfDays">
                <Form.Label column sm="4" style={{fontWeight:"550"}}>
                  Number Of Days
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    type="number"
                    placeholder="Number of Days"
                    defaultValue={noOfDays}
                  />
                </Col>
                <Col sm="4">
                <button type="button" className="btn btn-success calculate-button-special-event">
                    Calculate
                </button>
                </Col>
              </Row>
              </Form.Group>
          </Form>
          

          <Form className={classes.formLabelStyle}>
            <Form.Group>
              
              <Row>
                  <Col></Col>
              </Row>
              <Row className={classes.Rowinform}>
                <Col sm="4"></Col>
                <Form.Label column sm="4">
                  No of Units In Peak Time
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    type="text"
                    value={noOfUnitPeak}
                    disabled
                  />
                </Col>
              </Row>
              <Row className={classes.Rowinform}>
                <Col sm="4"></Col>
                <Form.Label column sm="4">
                No of Units In Off Peak Time
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    type="text"
                    value={noOfUnitOffPeak}
                    disabled
                  />
                </Col>
              </Row>
              <Row className={classes.Rowinform}>
                <Col sm="4"></Col>
                <Form.Label column sm="4">
                No of Units In Day Time
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    type="text"
                    value={noOfUnitDay}
                    disabled
                  />
                </Col>
              </Row>
              <Row className={classes.Rowinform}>
                <Col sm="4"></Col>
                <Form.Label column sm="4" style={{fontWeight:"550"}}>
                Additional Amount for the Event
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    type="text"
                    value={"LKR : "+addtionalChargeBill}
                    disabled
                  />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Paper>


      </Paper>
      <Popup
        title="Add New Device Details"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <CalculateBillForm
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
        />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
        </div>
    )
}