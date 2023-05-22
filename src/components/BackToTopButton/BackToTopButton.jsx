import React, { useEffect, useState } from 'react'

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setBackToTopButton(true)
            }
            else {
                setBackToTopButton(false)
            }
        })
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    return (
        <div>
            {backToTopButton && (
                <button
                    style={{
                        position: 'fixed',
                        padding: '0.5rem 1rem',
                        fontSize: '20px',
                        bottom: '40px',
                        right: '40px',
                        backgroundColor: '#ec7532',
                        color: '#fff',
                        textAlign: 'center',
                        border: 'none',
                        borderRadius: '8px',
                        opacity: '0.5',
                    }}

                    onClick={scrollToTop}
                >
                    <i className="fa fa-angle-up"></i>
                </button>
            )}
        </div>
    )
}

export default BackToTopButton