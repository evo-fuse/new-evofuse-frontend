function ContactSkeleton() {
  return (
    <div className="contact-page">
      <div className="container">
        <section className="section">
          <div className="skeleton skeleton-title" style={{ height: '48px', width: '400px', margin: '0 auto 16px', maxWidth: '100%' }}></div>
          <div className="skeleton skeleton-text" style={{ height: '20px', width: '500px', margin: '0 auto 48px', maxWidth: '100%' }}></div>
          
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="skeleton" style={{ height: '12px', width: '80px', marginBottom: '8px' }}></div>
            <div className="skeleton skeleton-text" style={{ height: '48px', marginBottom: '24px' }}></div>
            
            <div className="skeleton" style={{ height: '12px', width: '100px', marginBottom: '8px' }}></div>
            <div className="skeleton skeleton-text" style={{ height: '48px', marginBottom: '24px' }}></div>
            
            <div className="skeleton" style={{ height: '12px', width: '90px', marginBottom: '8px' }}></div>
            <div className="skeleton skeleton-text" style={{ height: '120px', marginBottom: '32px' }}></div>
            
            <div className="skeleton skeleton-text" style={{ height: '16px', width: '80%', marginBottom: '20px' }}></div>
            <div className="skeleton skeleton-button" style={{ width: '120px', height: '48px' }}></div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactSkeleton

