function PageHeader({align, pageTitle, headerText}) {
  return (
    <div className='py-10 mt-20'>
        <div className="container mx-auto max-w-7xl px-4">
            <div className={`section-title mx-auto max-w-3xl text-${align}`}>
                <h2 className={`text-5xl font-bold heading-font mb-${headerText?6:0}`}>{pageTitle}</h2>
                {headerText && <p className='text-lg max-w-lg mx-auto text-gray-600'>{headerText}</p>}                
            </div>
        </div>
    </div>
  )
}

export default PageHeader