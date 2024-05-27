import React from 'react'
import SidebarRow from './SidebarRow'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <h4>Contacts</h4>
        <SidebarRow src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5Melv1LI1iSKSI6CbNsC8_KVpulK6MhFqS3H7YUKTL4PEL9VJTuhzLdwWS0nD4M-TCU&usqp=CAU" title="Jeremy Soto" />
        <SidebarRow src="https://thequeerness.com/wp-content/uploads/2016/10/9b50d46c683db73868e0e334d6262a1e-1000x1000x1.jpg?w=960&h=1000&crop=1" title="Yaismarelis Molina" />
        <SidebarRow src="https://pm1.aminoapps.com/6908/e02113dc2f773648c0cae348f54f9cb275451610r1-1136-1133v2_uhq.jpg" title="Gabriela Gonzalez" />
        <SidebarRow src="https://pm1.aminoapps.com/6383/9de094731d26b08748b8e7b9c89f9db9bc100161_00.jpg" title="Frederick Betancourt" />
        <SidebarRow src="https://external-preview.redd.it/kg7PLSFo9qiybvu-uvzqisUBUwJd_UJ4qp1Vxv2uuZw.jpg?width=640&crop=smart&auto=webp&s=7c5c602b39e6b2c2935e84664e468d1431a6c2f0" title="Michael Schmidt" />
        <SidebarRow src="https://i.pinimg.com/474x/9e/e1/c6/9ee1c6f0820cc3799b79f5ae8a464d17.jpg" title="Diego Brandon" />
        <div className="sidebar__footer">
          <h4>See More</h4>
          <KeyboardArrowDownIcon />
        </div>
        
    </div>
  )
}

export default Sidebar