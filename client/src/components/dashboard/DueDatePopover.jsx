import React from "react";
import Pikaday from "pikaday";
import moment from "moment";

const DueDatePopover = ({ toggleShowDueDate, card }) => {
  console.log("toggleShowDueDate from DueDatePopover", toggleShowDueDate);

  useEffect(() => {
    let newPicker = new Pikaday({
      field: document.querySelector(".datepicker-select-date input"),
      bound: false,
      container: document.getElementById("calendar-widget"),
      firstDay: 1,
      yearRange: 10,
      defaultDate: moment().add(1, "day").toDate(),
      setDefaultDate: true,
      format: "M/D/YYYY",
      i18n: {
        previousMonth: "Prev",
        nextMonth: "Next",
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        weekdays: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        weekdaysShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      },
      toString(date, format) {
        return moment(date).format(format);
      },
    });
  }, []);

  // picker.getDate()
  //Returns a basic JavaScript Date object of the selected day, or null if no selection.

  return (
    <div className="popover due-date">
      <header>
        <span>Change due date</span>
        <a
          href=""
          className="icon-sm icon-close"
          onClick={() => picker.hide()}
        ></a>
      </header>
      <div className="content">
        <form>
          <div className="datepicker-select">
            <div className="datepicker-select-date">
              <label>
                Dateeeeee
                <input type="text" placeholder="Enter date" autoFocus />
              </label>
            </div>
            <div className="datepicker-select-time">
              <label>
                Timeeeee
                <input type="text" placeholder="Enter time" value="12:00 PM" />
              </label>
            </div>
            <div id="calendar-widget"></div>
          </div>
          <button className="button" type="submit">
            Savefdfdsf
          </button>
          <button
            onClick={toggleShowDueDate}
            className="button red-button"
            type="reset"
          >
            Remove
          </button>
        </form>
      </div>
    </div>
  );
};

export default DueDatePopover;