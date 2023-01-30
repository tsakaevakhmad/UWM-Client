import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function ConfirmAccaunt(props) {
    
    const [searchParams] = useSearchParams();
    
    const code = searchParams.get("code");
    const email = searchParams.get("email");
    
    return (
        <div className="centerContentBox col-4">{code} {email}</div>
    )
}
