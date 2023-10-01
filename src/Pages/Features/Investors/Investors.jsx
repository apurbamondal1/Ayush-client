import React from 'react';
import { Link } from 'react-router-dom';
//Todo invest option and maps
const Investors = () => {
    return (
        <div className='pt-[90px] pl-[10px]'>
        <h3 className="text-3xl mb-5"><strong>About Investors and Investment</strong></h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className='text-black'>Investors Name</th>
        <th className='text-black'>Amount</th>
        <th className='text-black'>Site Name</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
        <button className='btn btn-secondary'><Link to= '/dashboard/dashboard/investors/dashboard/payment'>Invest Option</Link></button>
        </td>
        <td>Ayurvedic</td>
        <th>
          <button className="btn btn-primary btn-xs">See Your Investment and Profit</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">United states</div>
            </div>
          </div>
        </td>
        <td>
        <button className='btn btn-secondary'><Link to= '/dashboard/dashboard/investors/dashboard/payment'>Invest Option</Link></button>
        </td>
        <td>Homeopathy</td>
        <th>
          <button className="btn btn-primary btn-xs">See Your Investment and Profit</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
        <button className='btn btn-secondary'><Link to= '/dashboard/dashboard/investors/dashboard/payment'>Invest Option</Link></button>
        </td>
        <td>Unani</td>
        <th>
          <button className="btn btn-primary btn-xs">See Your Investment and Profit</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
        <button className='btn btn-secondary'><Link to= '/dashboard/dashboard/investors/dashboard/payment'>Invest Option</Link></button>
        </td>
        <td>Homeopathy</td>
        <th>
          <button className="btn btn-primary btn-xs">See Your Investment and Profit</button>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    
  </table>
</div>
        </div>
    );
};

export default Investors;