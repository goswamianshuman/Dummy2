import React from "react";
import styles from "../../styles/DocsContent.module.css";

function SearchApi() {
  return (
    <div className={styles.introContainer}>
      <h1>Search Api</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti corporis vel quisquam
        cum nemo ipsam necessitatibus, temporibus neque dolor unde et minus. Rerum animi eius qui
        officiis placeat dolor.
      </p>

      <div className={styles.SearchApiBracket}>
        API URL: Consectetur mauris venenatis tristique.
      </div>

      <table>
        <thead>
          <tr>
            <th>
              <p>Parameter</p>
            </th>
            <th>
              <p>Description</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Parameter</p>
            </td>
            <td>
              {" "}
              <p>Description</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Parameter</p>
            </td>
            <td>
              {" "}
              <p>Description</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Parameter</p>
            </td>
            <td>
              {" "}
              <p>Description</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Parameter</p>
            </td>
            <td>
              {" "}
              <p>Description</p>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Example:</h2>

      <div className={styles.SearchApiBracket}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad quaerat expedita quam
        totam ut quibusdam qui rem, quia optio quisquam quasi, quo deserunt possimus autem
        asperiores assumenda, voluptas reprehenderit?
      </div>
    </div>
  );
}

export default SearchApi;
