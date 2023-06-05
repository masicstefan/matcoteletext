import { Outlet } from 'react-router-dom';

export default function NoviceLayout() {
  return (
    <div className='novice-layout'>
        <h2>Novice</h2>

        <Outlet />
    </div>
  )
};