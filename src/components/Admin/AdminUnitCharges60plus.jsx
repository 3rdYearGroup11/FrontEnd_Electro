import React from "react";
import { Card } from "react-bootstrap";
import "../../assets/css/Admin/adminupdateunitcharges.css";
import { MdNotificationsActive } from "react-icons/md";

export default function AdminUnitCharges60plus() {
  return (
    <div className="admin-unit-body">
      <div id="admin-unit-title-heading">
        <h2>
          <label>FIXED BILLING MODEL (APPLICABLE FOR 60+ UNITS)</label>
        </h2>
      </div>

      <div class="admin-unit-table">
        <ul id="admin-unit-horizontal-list">
          <li>Category</li>
          <li>Unit Charge(LKR/kWh)</li>
          <li>Fixed Charge(LKR/month)</li>
        </ul>
      </div>

      <Card>
        <Card.Body>
          <ul id="admin-unit-horizontal-list-inside">
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-category"
              >
                00-60
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-unitCharge"
              >
                7.85
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update">
                UPDATE&nbsp;
                <MdNotificationsActive
                  style={{ width: "1.2rem", height: "1.2rem" }}
                ></MdNotificationsActive>
              </button>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-fixedCharge"
              >
                N/A
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update" disabled>
                UPDATE
              </button>
            </li>
          </ul>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <ul id="admin-unit-horizontal-list-inside">
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-category"
              >
                61-90
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-unitCharge"
              >
                10.00
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update">
                UPDATE&nbsp;
                <MdNotificationsActive
                  style={{ width: "1.2rem", height: "1.2rem" }}
                ></MdNotificationsActive>
              </button>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-fixedCharge"
              >
                90.00
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update" disabled>
                UPDATE
              </button>
            </li>
          </ul>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <ul id="admin-unit-horizontal-list-inside">
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-category"
              >
                91-120
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-unitCharge"
              >
                27.75
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update" disabled>
                UPDATE
              </button>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-fixedCharge"
              >
                480.00
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update" disabled>
                UPDATE
              </button>
            </li>
          </ul>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <ul id="admin-unit-horizontal-list-inside">
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-category"
              >
                121-180
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-unitCharge"
              >
                32.00
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update" disabled>
                UPDATE
              </button>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-fixedCharge"
              >
                480.00
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update" disabled>
                UPDATE
              </button>
            </li>
          </ul>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <ul id="admin-unit-horizontal-list-inside">
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-category"
              >
                {" "}
                {">"} 180
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-unitCharge"
              >
                45.00
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update" disabled>
                UPDATE
              </button>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-fixedCharge"
              >
                540.00
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update">
                UPDATE&nbsp;
                <MdNotificationsActive
                  style={{ width: "1.2rem", height: "1.2rem" }}
                ></MdNotificationsActive>
              </button>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}