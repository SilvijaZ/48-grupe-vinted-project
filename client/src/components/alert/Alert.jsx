/* eslint-disable react/prop-types */


export function Alert( {text, type} ){

    const colorClass = {
        success: 'alert-success',
        error: 'alert-danger',
    }

    const ariaLabels = {
        success: 'Success',
        error: 'Danger',
    }

    const linkHref = {
        success: '#check-circle-fill',
        error: '#exclamation-triangle-fill',
    }

    if(text === ''){
        return <></>;
    }


    return (
        <>
           <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                <symbol id="check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </symbol>
                <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </symbol>
            </svg>
           
            <div className={`${alert} alert d-flex align-items-center ${colorClass[type]}`} role="alert">
                <svg className="bi ms-3 flex-shrink-0 me-4" width={25} height={25} role="img" aria-label={ariaLabels[type]}><use xlinkHref={linkHref[type]}/></svg>
                <div>{text}</div>
            </div>
        </>
    );
}