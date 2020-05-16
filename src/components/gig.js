import React from "react"
import styles from "./gig.module.css"

export default ({ Band, Date, Location, Name, Venue, URL }) => {
  let venueHtml = null;
  if (URL && Venue) {
    venueHtml = (
      <a href="{URL}">{Venue}</a>
    );
  } else if (Venue) {
    venueHtml = Venue;
  }

  return (
      <div className={styles.gig}>
          <div className={styles.name}>{Name}</div>
          <div className={styles.meta}>
            <span className={styles.date}>{Date}</span>
            {venueHtml &&
              <span className={styles.venue}> - {venueHtml}</span>
            }
          </div>
      </div>
  )
}
