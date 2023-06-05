import { Outlet } from 'react-router-dom';

export default function MmcLayout() {
  return (
    <div className='mmc-layout'>
        <Outlet />
    </div>
  )
};