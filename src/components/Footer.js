import React, { Component } from 'react'

function Footer(props)
{
   return (
            <footer className="text-muted">
                <div className="container">
                    <p className="float-right">
                        &copy; 2019 by The Sick Dude
                    </p>
                    <p>Een Game Shop, een voorbeeld app voor de lessen WebApps</p>
                </div>
            </footer>
        ) 
}

// class Footer extends Component
// {
//     render() {
//         return (
//             <footer className="text-muted">
//                 <div className="container">
//                     <p className="float-right">
//                         &copy; 2019 by The Sick Dude
//                     </p>
//                     <p>Een Game Shop, een voorbeeld app voor de lessen WebApps</p>
//                 </div>
//             </footer>
//         )
//     }
// }

export default Footer