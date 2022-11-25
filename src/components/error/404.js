import '../../App.css'

function PageNotFound() {
    return (
        <div className='col-sm-12 col-md-12 col-lg-12 text-center'>
            <h1 className='text-warning'>
                <span>
                    <i className="fa fa-exclamation-triangle"></i>
                    &nbsp;
                    404, Page Not Found!
                </span>
            </h1>
        </div>
    )
}

export default PageNotFound;