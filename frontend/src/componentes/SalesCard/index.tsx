import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../notificationButton'
import './styles.css'
function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);
    return (
        <div className="dsmeta-card">
            <h2 className='dsmeta-sales-title'> VENDAS </h2>
            <div>
                <div className="form-control-contaner">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="form-control-contaner">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) =>setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">DATA</th>
                            <th>VENDEDOR</th>
                            <th className="show992">VISITAS</th>
                            <th className="show992">VENDAS</th>
                            <th>TOTAL</th>
                            <th>NOTIFICAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#123</td>
                            <td className="show576">08/07/2022</td>
                            <td>João</td>
                            <td className="show992">20</td>
                            <td className="show992">10</td>
                            <td>R$ 35.300.00</td>
                            <td>
                                <div className="dsmet-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#456</td>
                            <td className="show576">10/02/2022</td>
                            <td>Pedro</td>
                            <td className="show992">20</td>
                            <td className="show992">10</td>
                            <td>R$ 48.300.00</td>
                            <td>
                                <div className="dsmet-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#789</td>
                            <td className="show576">05/09/2022</td>
                            <td>Maria</td>
                            <td className="show992">20</td>
                            <td className="show992">10</td>
                            <td>R$ 55.300.00</td>
                            <td>
                                <div className="dsmet-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard
