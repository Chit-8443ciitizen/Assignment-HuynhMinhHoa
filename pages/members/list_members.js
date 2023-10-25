import axios from "axios";
const courtsList = async () => {
    try {
        const response = await axios.get(
            `https://6503ba86c8869921ae2420ea.mockapi.io/Orders`
            // link mockup Api: order & order details https://6503ba86c8869921ae2420ea.mockapi.io/Order_details
        );
        let datas = await response.data;
        let listTR = ``;
        for (const key in datas) {
            listTR = listTR + buildTR(datas[key], key);
          }
          return `<table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">customer_name</th>
            <th scope="col">customer_address</th>
            <th scope="col">customer_email</th>
            <th scope="col">customer_phone_number</th>
            <th scope="col">created_day</th>
            <th scope="col">status</th>
          </tr>
        </thead>
        <tbody>
        ${listTR}
        </tbody>
        </table>`;
    } catch (error) {
    return error;
  }
};
const buildTR = (item, key) => {
    let { id, customer_name, customer_address, customer_email, customer_phone_number, 
        created_day,  status
    } = item;
    return `
        <tr>
            <th scope="row">${key}</th>
            <td>${id || ""}</td>
            <td>${customer_name || ""}</td>
            <td>${customer_address || ""}</td>
            <td>${customer_email || ""}</td>
            <td>${customer_phone_number || ""}</td>
            <td>${created_day || ""}</td>
            <td>${status || ""}</td>
        </tr>
    `;
}
export{courtsList};