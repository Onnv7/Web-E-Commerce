import React from "react";

const Ruby = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const url = `http://localhost:8800/backend/paypal/pay/${user._id}`
  return (
    <div class="dienthoai">
      <form action={url} method="post">
        <input type="text" name="money" />
        <input type="submit" value="Buy" />
      </form>
    </div>
  );

};
export default Ruby;
