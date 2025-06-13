import React, { useState } from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [view, setview] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleView = () => {
    setview(true);
    setEdit(false);
  };

  const handleEdit = () => {
    setview(false);
    setEdit(true);
  };

  return (
    <div className={styles.container}>
      <h3>Campaigns</h3>
      {!edit && !view && (
        <ul className={styles.campListBox}>
          {[...Array(30)].map((_, index) => (
            <li className={styles.campList} key={index}>
              <p>Campaign name</p>
              <p onClick={handleView}>View</p>
              <p onClick={handleEdit}>Edit</p>
              <p className={styles.delete}>Delete</p>
            </li>
          ))}
        </ul>
      )}
      {edit && (
        <div>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input
                name="campaignName"
                type="text"
                className={styles.formInput}
                placeholder="Enter campaign name"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Target Age</label>
              <input
                name="targetAge"
                type="number"
                className={styles.formInput}
                placeholder="Enter target age"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Target Gender</label>
              <div className={styles.formRadioGroup}>
                <label className={styles.formRadio}>
                  <input name="targetGender" value="male" type="radio" />
                  Male
                </label>
                <label className={styles.formRadio}>
                  <input name="targetGender" value="female" type="radio" />
                  Female
                </label>
              </div>
            </div>
          </form>
        </div>
      )}
      {view && (
        <div className={styles.card}>
          <h3 className={styles.title}>Campaign Name</h3>
          <div className={styles.detail}>
            <p className={styles.label}>Age:</p>
            <p className={styles.value}>23yrs</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.label}>Gender:</p>
            <p className={styles.value}>Male</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
