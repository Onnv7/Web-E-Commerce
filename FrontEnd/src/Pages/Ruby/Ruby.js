import React from "react";

const Ruby = () => {
  return (
    <div class="dienthoai">
      <form action="http://localhost:8080/backend/paypal/pay" method="post">
        <input type="text" name="money" />
        <input type="submit" value="Buy" />
      </form>
    </div>
  );
};
export default Ruby;
