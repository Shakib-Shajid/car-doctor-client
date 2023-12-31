
const BookingRow = ({ booking }) => {
    const { email, date, service, price, img } = booking;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {
                            img && <img src={img} alt="Avatar Tailwind CSS Component" />
                        }
                    </div>
                </div>
                <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{email}</td>
            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;