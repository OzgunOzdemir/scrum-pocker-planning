import React from 'react'
import './Table.css'

const Table = () => {
    return (
        <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Story</th>
                  <th>Story Point</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Story 1</td>
                  <td></td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>Story 2</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
                <tr>
                  <td>Story 3</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
                <tr>
                  <td>Story 4</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
                <tr>
                  <td>Story 5</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
                <tr>
                  <td>Story 6</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
                <tr>
                  <td>Story 7</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
                <tr>
                  <td>Story 8</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
                <tr>
                  <td>Story 9</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
                <tr>
                  <td>Story 10</td>
                  <td></td>
                  <td>Not Voted</td>
                </tr>
              </tbody>
            </table>
            </div>
    );
}

export { Table }