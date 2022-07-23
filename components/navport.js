function navbar()
{return`
<div id = "left"><a href=""><p>SUBSCRIBE NOW</p></a></div>
<div id = "center-logo"><a href="index.html"><img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_96ac9306-4c81-4ab8-8d2b-4e818eed7f76_2048x.png?v=1606482289" alt=""></a></div>
<div id = "right">
    <div><a href="./search.html"><img src="https://cdn-icons-png.flaticon.com/128/7289/7289312.png" alt=""></a></div>
    <div><a href=""><img src="https://cdn-icons-png.flaticon.com/128/1216/1216811.png" alt=""></a></div>
    <div><a href="signup.html"><img src="https://cdn-icons-png.flaticon.com/128/6423/6423509.png" alt=""></a></div>
    <div style = "display:flex; justify_content:space-between; width : 35px;"><a href="cart.html"><img src="https://cdn-icons-png.flaticon.com/128/7269/7269930.png" alt="" style = "width : 80%;"></a><span id = "count" style = "color: red; font-weight : 1000; font-size :14px;">0</span></div>
`}

export default navbar;