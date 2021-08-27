import * as React from 'react';

interface IActivityReportProps {}

export const ActivityReport: React.FC<IActivityReportProps> = (props) => {
  return (
    <>
      <table className='border-collapse border border-gray-800 '>
        <thead>
          <tr>
            <th className='border border-gray-800 '></th>
            <th className='border border-gray-800 '>Task</th>
            <th className='border border-gray-800 '>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-gray-800 '>1</td>
            <td className='border border-gray-800 '>
              Quote for ABB M2M gateway and ARG 600
            </td>
            <td className='border border-gray-800 '>Done on 08/01/2021</td>
          </tr>
          <tr>
            <td className='border border-gray-800 '>2</td>
            <td className='border border-gray-800 '>
              Fundraising for the M2M gateway (restricted fundraising: The
              fundraising was restricted as the issue of the M2M gateway is very
              sensitive in the balance of power at OVG with respect to the Belux
              team)
            </td>
            <td className='border border-gray-800 '>
              Done as of 08/10/2021. ($7,200 raised from 10 donors. All the
              donors are in academia, tech, and startups.)
            </td>
          </tr>
          <tr>
            <td className='border border-gray-800 '>3</td>
            <td className='border border-gray-800 '>
              Ordering the M2M gateway
            </td>
            <td className='border border-gray-800 '>
              Ordered on 08/19/2021 after carefully checking for other telemetry
              options. ABB was the best solution as all the equipment is
              presently attached to ABB modems. (Delivery expected by
              mid-October 2021)
            </td>
          </tr>
          <tr>
            <td className='border border-gray-800 '>4</td>
            <td className='border border-gray-800 '>
              Setting up a dedicated mobile money account for the Virunga
              SuperSite (see activities 5 and 6 below)
            </td>
            <td className='border border-gray-800 '>Done on 08/15/2021</td>
          </tr>
          <tr>
            <td className='border border-gray-800 '>5</td>
            <td className='border border-gray-800 '>
              Covering the cost for the cellular data of the 5 stations not
              covered by Airtel. Explicitly, we support the following five
              stations: Bobandana, Tshubi, Munigi, Nyiragongo, and Rusayo.
            </td>
            <td className='border border-gray-800 '>
              Starting in August 2021 and will go on for an initial period of 24
              months or until the DRC government starts paying the functioning
              cost of OVG.
            </td>
          </tr>
          <tr>
            <td className='border border-gray-800 '>6</td>
            <td className='border border-gray-800 '>
              Facilitating the arrival of a junior OVG researcher for a Master’s
              degree in the US in the middle of the pandemic. This includes
              support for collecting lava rocks that will be used for research
              during his master’s degree. We expect that he will continue with a
              Ph.D.
            </td>
            <td className='border border-gray-800 '>
              Done as of 08/18/2021 Cost as of 08/23/2021: About $1,000. First
              proceeded through Covid19drc.com (also part of BuildingWakanda).
              We expect to spend another $1,000 by the end of September 2021 on
              a laptop and the basic logistics and maintenance costs for a new
              graduate student. He will be financial independent by the end of
              September 2021.
            </td>
          </tr>
          <tr>
            <td className='border border-gray-800 '>7</td>
            <td className='border border-gray-800 '>
              Quote from Nanometrics for the seismic stations
            </td>
            <td className='border border-gray-800 '>
              (in progress, final quote expected by 08/25/2021)
            </td>
          </tr>
          <tr>
            <td className='border border-gray-800 '>8</td>
            <td className='border border-gray-800 '>
              Social media logo and website
            </td>
            <td className='border border-gray-800 '>
              <a
                href='https://www.buildingwakanda.com'
                className='text-blue-500'
              >
                https://www.buildingwakanda.com
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
