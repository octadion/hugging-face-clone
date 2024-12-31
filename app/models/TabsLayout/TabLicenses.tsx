import { LicenseSVG } from 'ui/svgs'

import { ModelsLicense } from '../const'

export default function TabLicenses() {
  return (
    <div className="mb-3">
      <div className="flex flex-wrap">
        {ModelsLicense.map((item, index) => (
          <a key={index} className="tag  tag-white rounded-full" href={`/nodels?license=license%3A${item}`}>
            <LicenseSVG />
            <span>{item}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
