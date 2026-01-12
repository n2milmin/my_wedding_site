import './Registry.css';

const Registry = () => {

  const handleRegistry = () => {
    var win = window.open("https://www.myregistry.com/wedding-registry/nicole-milmine-and-tyler-parkins-goderich-on/5269037",
      '_blank');
    win.focus();
  };

  return (
    <div className="registry_container">
      <div className='left'>
        <div className="psa">
          <h2>PSA</h2>
          <p>Simply joining us to celebrate our marriage is enough, but here are some options if you'd like to gift us something more.</p>
        </div>

        <div className="registry">
          <h2>Physical Gifts</h2>
          <p>We're registered with myregistry.com</p>
          <button className="registry_btn" onClick={handleRegistry}>Registry</button>
        </div>
      </div>

      <div className='right'>
        <div className="fund">
          <h2>Help us Fund</h2>
          <p>As we already have an apartment, we don't necessarily need things. If you don't like any of the registry options, we'll also accept a contribution to our honeymoon or anything else you'd like us to spend it on (such as a trip or downpayment).</p>
          <p>Putting this sounds so weird but if you wish to send an e-transfer, you can send it to tyler.parkins@yahoo.ca</p>
        </div>
      </div>
    </div>
  )
}

export default Registry;