import React from 'react'
import Logo from './assets/business logo.jpg'

export default function App(){
  const whatsappLink = 'https://wa.me/27644020151'
  const email = 'jktransport723@gmail.com'

  return (
    <div className='app-root'>
      <header className='site-header'>
        <div className='container header-inner'>
          <div className='brand'>
            <img src={Logo} alt='JSK Logo' className='logo' />
            <div className='brand-text'>
              <div className='company-name'>JSK Transport & Logistics (Pty) Ltd</div>
              <div className='reg'>Registration No: 2025/694427/07</div>
            </div>
          </div>
          <nav className='nav-links'>
            <a href='#services'>Services</a>
            <a href='#contracts'>Contracts</a>
            <a href='#inspection'>Inspections</a>
            <a href='#contact'>Contact</a>
            <a className='wa-btn' href={whatsappLink} target='_blank' rel='noreferrer'>WhatsApp</a>
          </nav>
        </div>
      </header>

      <main className='container hero'>
        <section className='hero-left'>
          <h1>Reliable transport. Trusted logistics.</h1>
          <p className='muted'>JSK provides professional freight, driver placement, vehicle management and recovery services across South Africa.</p>
          <div className='hero-ctas'>
            <a className='btn primary' href='#contact'>Get a Quote</a>
            <a className='btn light' href='/downloads/Employment_Contract_JSK_with_Annexure.pdf' target='_blank'>Download Contract</a>
          </div>
          <div className='features'>
            <div className='card'><h3>Fleet Management</h3><p>Maintenance, fueling and insurance management.</p></div>
            <div className='card'><h3>Driver Services</h3><p>Professional drivers operating under JSK’s Code of Conduct.</p></div>
          </div>
        </section>
        <aside className='sidebar card'>
          <h4>Contact & Quick Actions</h4>
          <p>Phone / WhatsApp:</p>
          <a className='accent-link' href={whatsappLink} target='_blank'>+27 64 402 0151</a>
          <p className='mt'>Email:</p>
          <a className='accent-link' href={'mailto:'+email}>{email}</a>
          <div className='downloads'>
            <a className='doc' href='/downloads/Employment_Contract_JSK_with_Annexure.pdf' target='_blank'>Employment Contract (PDF)</a>
            <a className='doc' href='/downloads/Vehicle_Inspection_Checklist_JSK_Fillable.pdf' target='_blank'>Vehicle Inspection (Fillable PDF)</a>
          </div>
        </aside>
      </main>

      <section id='services' className='container section'>
        <h2>Our Services</h2>
        <p className='muted'>Driver placement, vehicle management, freight forwarding and emergency recovery.</p>
        <div className='grid'>
          <div className='card'><h3>Driver Placement</h3><p>Short & long-term driver contracts with training and compliance checks.</p></div>
          <div className='card'><h3>Vehicle Maintenance</h3><p>Scheduled servicing, rapid repairs and parts management.</p></div>
          <div className='card'><h3>Breakdown & Recovery</h3><p>24/7 roadside assistance and recovery solutions.</p></div>
        </div>
      </section>

      <section id='contracts' className='container section'>
        <h2>Agreements & Policies</h2>
        <p className='muted'>All formal agreements, driver conduct policies and inspection forms are below.</p>
        <div className='actions'>
          <a className='btn light' href='/downloads/Employment_Contract_JSK_with_Annexure.pdf' target='_blank'>Employment Contract & Annexure A</a>
          <a className='btn light' href='/downloads/Vehicle_Inspection_Checklist_JSK_Fillable.pdf' target='_blank'>Vehicle Inspection Checklist (Fillable)</a>
        </div>
      </section>

      <section id='inspection' className='container section'>
        <h2>Vehicle Inspections</h2>
        <p className='muted'>Inspectors use a standard checklist and record defects for repair scheduling.</p>
        <div className='card'>
          <h4>Start an Inspection</h4>
          <p>Open the fillable inspection form, complete, and submit to our maintenance team.</p>
          <a className='btn primary' href='/downloads/Vehicle_Inspection_Checklist_JSK_Fillable.pdf' target='_blank'>Open Inspection Form</a>
        </div>
      </section>

      <section id='contact' className='container section'>
        <h2>Contact & Recruitment</h2>
        <div className='two-col'>
          <div>
            <p className='muted'>For commercial enquiries, driver recruitment and vehicle management please contact us:</p>
            <p className='bold'>JSK Transport and Logistics (Pty) Ltd</p>
            <p className='muted'>Email: <a className='accent-link' href={'mailto:'+email}>{email}</a></p>
            <p className='muted'>WhatsApp: <a className='accent-link' href={whatsappLink} target='_blank'>+27 64 402 0151</a></p>
            <h4 className='mt'>Driver Applications</h4>
            <p className='muted'>Send CV, driving license and references to <a className='accent-link' href={'mailto:'+email}>{email}</a>.</p>
          </div>
          <aside className='card'>
            <h4>Request a Quote</h4>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Demo: quote received'); e.target.reset();}}>
              <label>Name</label><input required className='input' />
              <label className='mt'>Email</label><input required className='input' />
              <label className='mt'>Message</label><textarea required className='input' rows={4}></textarea>
              <button className='btn primary mt' type='submit'>Send</button>
            </form>
          </aside>
        </div>
      </section>

      <footer className='site-footer'>
        <div className='container footer-inner'>
          <div className='brand small'>
            <img src={Logo} alt='JSK' className='logo-sm' />
            <div>© JSK Transport and Logistics (Pty) Ltd — 2025</div>
          </div>
          <div className='muted'>Registered: 2025/694427/07</div>
        </div>
      </footer>
    </div>
  )
}
