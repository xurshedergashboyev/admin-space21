import React, {FC, useState} from 'react'
import {TaskUsers} from './TaskUsers'
import {OverlayTrigger, Tooltip} from 'react-bootstrap-v5'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
// import spaceCreateImg from '../../../../../build/media/illustrations/checkout.png'

const CreatePageCard: FC = () => {
  const [activeColor, setActiveColor] = useState(false)

  const handleActive = () => {
    setActiveColor(!activeColor)
  }

  const colorArray = [
    'blue',
    'orange',
    'yellow',
    'red',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
    '#80B300',
    '#809900',
    '#E6B3B3',
    '#6680B3',
    '#66991A',
    '#FF99E6',
    '#CCFF1A',
    '#FF1A66',
    '#E6331A',
    '#33FFCC',
    '#66994D',
    '#B366CC',
    '#4D8000',
    '#B33300',
    '#CC80CC',
    '#66664D',
    '#991AFF',
    '#E666FF',
    '#4DB3FF',
    '#1AB399',
    '#E666B3',
    '#33991A',
    '#CC9999',
    '#B3B31A',
    '#00E680',
    '#4D8066',
    '#809980',
    '#E6FF80',
    '#1AFF33',
    '#999933',
    '#FF3380',
    '#CCCC00',
    '#66E64D',
    '#4D80CC',
    '#9900B3',
    '#E64D66',
    '#4DB380',
    '#FF4D4D',
    '#99E6E6',
    '#6666FF',
  ]

  return (
    // <>
    <div className='post d-flex flex-column-fluid' id='kt_post'>
      <div id='kt_content_container' className='container'>
        <div className='card'>
          <div className='card-body p-0'>
            <div className='card-px text-center py-20 my-10'>
              <h2 className='fs-2x fw-bolder mb-10'>Create Space!</h2>
              <p className='text-gray-400 fs-4 fw-bold mb-10'>
                Enjoy creating many spaces
                <br />
                DFKLSDJFKL:DJF:KLDF
              </p>
              <a
                href='#'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_add_customer'
              >
                Add Space
              </a>
            </div>
            <div className='text-center px-4'>
              {/*<img className='mw-100 mh-300px' alt='' src={spaceCreateImg} />*/}
              <img
                src={toAbsoluteUrl('/media/illustrations/coding.png')}
                alt=''
                className='mv-100 mh-300px'
              />
            </div>
          </div>
        </div>
        <div className='modal fade' id='kt_modal_add_customer' aria-hidden='true'>
          <div className='modal-dialog modal-dialog-centered mw-650px'>
            <div className='modal-content'>
              <form
                className='form'
                action='#'
                id='kt_modal_add_customer_form'
                data-kt-redirect='../../demo1/dist/apps/customers/list.html'
              >
                <div className='modal-header' id='kt_modal_add_customer_header'>
                  <h2 className='fw-bolder'>Add a Space</h2>
                  <div
                    id='kt_modal_add_customer_close'
                    className='btn btn-icon btn-sm btn-active-icon-primary'
                  >
                    {/*icons/duotone/Navigation/Close.svg-->*/}
                    <span className='svg-icon svg-icon-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        width='24px'
                        height='24px'
                        viewBox='0 0 24 24'
                        version='1.1'
                      >
                        <g
                          transform='translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)'
                          fill='#000000'
                        >
                          <rect fill='#000000' x='0' y='7' width='16' height='2' rx='1' />
                          <rect
                            fill='#000000'
                            opacity='0.5'
                            transform='translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)'
                            x='0'
                            y='7'
                            width='16'
                            height='2'
                            rx='1'
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className='modal-body py-10 px-lg-17'>
                  <div
                    className='scroll-y me-n7 pe-7'
                    id='kt_modal_add_customer_scroll'
                    data-kt-scroll='true'
                    data-kt-scroll-activate='{default: false, lg: true}'
                    data-kt-scroll-max-height='auto'
                    data-kt-scroll-dependencies='#kt_modal_add_customer_header'
                    data-kt-scroll-wrappers='#kt_modal_add_customer_scroll'
                    data-kt-scroll-offset='300px'
                  >
                    <div className='fv-row mb-7'>
                      <label className='required fs-6 fw-bold mb-2'>Name</label>
                      <input
                        type='text'
                        className='form-control form-control-solid'
                        placeholder='Ex: Development'
                        name='name'
                        onChange={(e: any) => e.target.value}
                      />
                    </div>
                    <div className='fv-row mb-7'>
                      <label className='fs-6 fw-bold mb-2'>
                        <span className='required'>Color</span>
                        <i
                          className='fas fa-exclamation-circle ms-1 fs-7'
                          data-bs-toggle='tooltip'
                          title='Email address must be active'
                        />
                      </label>
                      {/*<input*/}
                      {/*  type='email'*/}
                      {/*  className='form-control form-control-solid'*/}
                      {/*  placeholder=''*/}
                      {/*  name='email'*/}
                      {/*  value='sean@dellito.com'*/}
                      {/*/>*/}
                      <div className='d-flex flex-wrap justify-content-center align-items-center my-5'>
                        {colorArray.map((val, i) => (
                          <div
                            className=' w-20px h-20px rounded-circle mx-2 my-2'
                            style={{
                              backgroundColor: val,
                              border: activeColor ? `1px solid ${val}` : 'none',
                            }}
                            onClick={handleActive}
                          />
                        ))}
                      </div>
                    </div>
                    <div className='fv-row mb-15'>
                      <label className='fs-6 fw-bold mb-2'>Description</label>
                      <textarea
                        // type='text'
                        className='form-control form-control-solid min-h-50 h-200px'
                        placeholder=''
                        name='description'
                      />
                    </div>

                    <div
                      className='fw-bolder fs-3 rotate collapsible mb-7'
                      data-bs-toggle='collapse'
                      /* @ts-ignore */
                      href='#kt_modal_add_customer_billing_info'
                      role='button'
                      aria-expanded='false'
                      aria-controls='kt_customer_view_details'
                    >
                      Advanced Settings
                      <span className='ms-2 rotate-180'>
                        <span className='svg-icon svg-icon-3'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            width='24px'
                            height='24px'
                            viewBox='0 0 24 24'
                            version='1.1'
                          >
                            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                              <polygon points='0 0 24 0 24 24 0 24' />
                              <path
                                d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                                fill='#000000'
                                fillRule='nonzero'
                                transform='translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)'
                              />
                            </g>
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div id='kt_modal_add_customer_billing_info' className='collapse show'>
                      <div className='d-flex flex-column mb-7 fv-row'>
                        <label className='required fs-6 fw-bold mb-2'>Share Space</label>
                        {/*<input*/}
                        {/*  className='form-control form-control-solid'*/}
                        {/*  placeholder=''*/}
                        {/*  name='address1'*/}
                        {/*  value='101, Collins Street'*/}
                        {/*/>*/}
                        <div className='d-flex justify-content-center'>
                          <div
                            className={`w-200px h-200px border ${
                              activeColor && 'border-danger'
                            }  mx-2 d-flex justify-content-center align-items-center flex-column`}
                            onClick={handleActive}
                            style={{border: activeColor ? `1px solid red` : 'none'}}
                          >
                            <KTSVG
                              path='/media/icons/duotone/General/User.svg'
                              className='svg-icon-5hx svg-icon-danger my-2'
                            />
                            <h4>Space21 Workspace</h4>
                          </div>
                          <div
                            className={`w-200px h-200px border ${
                              activeColor && 'border-danger'
                            }  mx-2 d-flex justify-content-center align-items-center flex-column`}
                            onClick={handleActive}
                            style={{border: activeColor ? `1px solid red` : 'none'}}
                          >
                            <KTSVG
                              path='/media/icons/duotone/General/Lock.svg'
                              className='svg-icon-5hx svg-icon-danger my-2'
                            />
                            <h4>Private</h4>
                          </div>
                        </div>
                      </div>
                      <div className='d-flex flex-column mb-7 fv-row'>
                        <label className='fs-6 fw-bold mb-2'>Template</label>
                        <select
                          className='form-control form-control-solid'
                          placeholder=''
                          name='address2'
                          value=''
                        >
                          <option value='custom'>Custom</option>
                          <option value='normal'>Normal</option>
                          <option value='kanban'>Kanban</option>
                          <option value='content'>Content</option>
                          <option value='marketing'>Marketing</option>
                          <option value='scrum'>Scrum</option>
                        </select>
                      </div>
                      <div className='d-flex flex-column mb-7 fv-row'>
                        <label className='required fs-6 fw-bold mb-2'>Town</label>
                        <input
                          className='form-control form-control-solid'
                          placeholder=''
                          name='city'
                          value='Melbourne'
                        />
                      </div>
                      <div className='row g-9 mb-7'>
                        <div className='col-md-6 fv-row'>
                          <label className='required fs-6 fw-bold mb-2'>State / Province</label>
                          <input
                            className='form-control form-control-solid'
                            placeholder=''
                            name='state'
                            value='Victoria'
                          />
                        </div>
                        <div className='col-md-6 fv-row'>
                          <label className='required fs-6 fw-bold mb-2'>Post Code</label>
                          <input
                            className='form-control form-control-solid'
                            placeholder=''
                            name='postcode'
                            value='3000'
                          />
                        </div>
                      </div>
                      <div className='d-flex flex-column mb-7 fv-row'>
                        <label className='fs-6 fw-bold mb-2'>
                          <span className='required'>Country</span>
                          <i
                            className='fas fa-exclamation-circle ms-1 fs-7'
                            data-bs-toggle='tooltip'
                            title='Country of origination'
                          ></i>
                        </label>
                        <select
                          name='country'
                          aria-label='Select a Country'
                          data-control='select2'
                          data-placeholder='Select a Country...'
                          data-dropdown-parent='#kt_modal_add_customer'
                          className='form-select form-select-solid fw-bolder'
                        >
                          <option value=''>Select a Country...</option>
                          <option value='AF'>Afghanistan</option>
                          <option value='AX'>Aland Islands</option>
                          <option value='AL'>Albania</option>
                          <option value='DZ'>Algeria</option>
                          <option value='AS'>American Samoa</option>
                          <option value='AD'>Andorra</option>
                          <option value='AO'>Angola</option>
                          <option value='AI'>Anguilla</option>
                          <option value='AQ'>Antarctica</option>
                          <option value='AG'>Antigua and Barbuda</option>
                          <option value='AR'>Argentina</option>
                          <option value='AM'>Armenia</option>
                          <option value='AW'>Aruba</option>
                          <option value='AU'>Australia</option>
                          <option value='AT'>Austria</option>
                          <option value='AZ'>Azerbaijan</option>
                          <option value='BS'>Bahamas</option>
                          <option value='BH'>Bahrain</option>
                          <option value='BD'>Bangladesh</option>
                          <option value='BB'>Barbados</option>
                          <option value='BY'>Belarus</option>
                          <option value='BE'>Belgium</option>
                          <option value='BZ'>Belize</option>
                          <option value='BJ'>Benin</option>
                          <option value='BM'>Bermuda</option>
                          <option value='BT'>Bhutan</option>
                          <option value='BO'>Bolivia, Plurinational State of</option>
                          <option value='BQ'>Bonaire, Sint Eustatius and Saba</option>
                          <option value='BA'>Bosnia and Herzegovina</option>
                          <option value='BW'>Botswana</option>
                          <option value='BV'>Bouvet Island</option>
                          <option value='BR'>Brazil</option>
                          <option value='IO'>British Indian Ocean Territory</option>
                          <option value='BN'>Brunei Darussalam</option>
                          <option value='BG'>Bulgaria</option>
                          <option value='BF'>Burkina Faso</option>
                          <option value='BI'>Burundi</option>
                          <option value='KH'>Cambodia</option>
                          <option value='CM'>Cameroon</option>
                          <option value='CA'>Canada</option>
                          <option value='CV'>Cape Verde</option>
                          <option value='KY'>Cayman Islands</option>
                          <option value='CF'>Central African Republic</option>
                          <option value='TD'>Chad</option>
                          <option value='CL'>Chile</option>
                          <option value='CN'>China</option>
                          <option value='CX'>Christmas Island</option>
                          <option value='CC'>Cocos (Keeling) Islands</option>
                          <option value='CO'>Colombia</option>
                          <option value='KM'>Comoros</option>
                          <option value='CG'>Congo</option>
                          <option value='CD'>Congo, the Democratic Republic of the</option>
                          <option value='CK'>Cook Islands</option>
                          <option value='CR'>Costa Rica</option>
                          <option value='CI'>Côte d'Ivoire</option>
                          <option value='HR'>Croatia</option>
                          <option value='CU'>Cuba</option>
                          <option value='CW'>Curaçao</option>
                          <option value='CY'>Cyprus</option>
                          <option value='CZ'>Czech Republic</option>
                          <option value='DK'>Denmark</option>
                          <option value='DJ'>Djibouti</option>
                          <option value='DM'>Dominica</option>
                          <option value='DO'>Dominican Republic</option>
                          <option value='EC'>Ecuador</option>
                          <option value='EG'>Egypt</option>
                          <option value='SV'>El Salvador</option>
                          <option value='GQ'>Equatorial Guinea</option>
                          <option value='ER'>Eritrea</option>
                          <option value='EE'>Estonia</option>
                          <option value='ET'>Ethiopia</option>
                          <option value='FK'>Falkland Islands (Malvinas)</option>
                          <option value='FO'>Faroe Islands</option>
                          <option value='FJ'>Fiji</option>
                          <option value='FI'>Finland</option>
                          <option value='FR'>France</option>
                          <option value='GF'>French Guiana</option>
                          <option value='PF'>French Polynesia</option>
                          <option value='TF'>French Southern Territories</option>
                          <option value='GA'>Gabon</option>
                          <option value='GM'>Gambia</option>
                          <option value='GE'>Georgia</option>
                          <option value='DE'>Germany</option>
                          <option value='GH'>Ghana</option>
                          <option value='GI'>Gibraltar</option>
                          <option value='GR'>Greece</option>
                          <option value='GL'>Greenland</option>
                          <option value='GD'>Grenada</option>
                          <option value='GP'>Guadeloupe</option>
                          <option value='GU'>Guam</option>
                          <option value='GT'>Guatemala</option>
                          <option value='GG'>Guernsey</option>
                          <option value='GN'>Guinea</option>
                          <option value='GW'>Guinea-Bissau</option>
                          <option value='GY'>Guyana</option>
                          <option value='HT'>Haiti</option>
                          <option value='HM'>Heard Island and McDonald Islands</option>
                          <option value='VA'>Holy See (Vatican City State)</option>
                          <option value='HN'>Honduras</option>
                          <option value='HK'>Hong Kong</option>
                          <option value='HU'>Hungary</option>
                          <option value='IS'>Iceland</option>
                          <option value='IN'>India</option>
                          <option value='ID'>Indonesia</option>
                          <option value='IR'>Iran, Islamic Republic of</option>
                          <option value='IQ'>Iraq</option>
                          <option value='IE'>Ireland</option>
                          <option value='IM'>Isle of Man</option>
                          <option value='IL'>Israel</option>
                          <option value='IT'>Italy</option>
                          <option value='JM'>Jamaica</option>
                          <option value='JP'>Japan</option>
                          <option value='JE'>Jersey</option>
                          <option value='JO'>Jordan</option>
                          <option value='KZ'>Kazakhstan</option>
                          <option value='KE'>Kenya</option>
                          <option value='KI'>Kiribati</option>
                          <option value='KP'>Korea, Democratic People's Republic of</option>
                          <option value='KW'>Kuwait</option>
                          <option value='KG'>Kyrgyzstan</option>
                          <option value='LA'>Lao People's Democratic Republic</option>
                          <option value='LV'>Latvia</option>
                          <option value='LB'>Lebanon</option>
                          <option value='LS'>Lesotho</option>
                          <option value='LR'>Liberia</option>
                          <option value='LY'>Libya</option>
                          <option value='LI'>Liechtenstein</option>
                          <option value='LT'>Lithuania</option>
                          <option value='LU'>Luxembourg</option>
                          <option value='MO'>Macao</option>
                          <option value='MK'>Macedonia, the former Yugoslav Republic of</option>
                          <option value='MG'>Madagascar</option>
                          <option value='MW'>Malawi</option>
                          <option value='MY'>Malaysia</option>
                          <option value='MV'>Maldives</option>
                          <option value='ML'>Mali</option>
                          <option value='MT'>Malta</option>
                          <option value='MH'>Marshall Islands</option>
                          <option value='MQ'>Martinique</option>
                          <option value='MR'>Mauritania</option>
                          <option value='MU'>Mauritius</option>
                          <option value='YT'>Mayotte</option>
                          <option value='MX'>Mexico</option>
                          <option value='FM'>Micronesia, Federated States of</option>
                          <option value='MD'>Moldova, Republic of</option>
                          <option value='MC'>Monaco</option>
                          <option value='MN'>Mongolia</option>
                          <option value='ME'>Montenegro</option>
                          <option value='MS'>Montserrat</option>
                          <option value='MA'>Morocco</option>
                          <option value='MZ'>Mozambique</option>
                          <option value='MM'>Myanmar</option>
                          <option value='NA'>Namibia</option>
                          <option value='NR'>Nauru</option>
                          <option value='NP'>Nepal</option>
                          <option value='NL'>Netherlands</option>
                          <option value='NC'>New Caledonia</option>
                          <option value='NZ'>New Zealand</option>
                          <option value='NI'>Nicaragua</option>
                          <option value='NE'>Niger</option>
                          <option value='NG'>Nigeria</option>
                          <option value='NU'>Niue</option>
                          <option value='NF'>Norfolk Island</option>
                          <option value='MP'>Northern Mariana Islands</option>
                          <option value='NO'>Norway</option>
                          <option value='OM'>Oman</option>
                          <option value='PK'>Pakistan</option>
                          <option value='PW'>Palau</option>
                          <option value='PS'>Palestinian Territory, Occupied</option>
                          <option value='PA'>Panama</option>
                          <option value='PG'>Papua New Guinea</option>
                          <option value='PY'>Paraguay</option>
                          <option value='PE'>Peru</option>
                          <option value='PH'>Philippines</option>
                          <option value='PN'>Pitcairn</option>
                          <option value='PL'>Poland</option>
                          <option value='PT'>Portugal</option>
                          <option value='PR'>Puerto Rico</option>
                          <option value='QA'>Qatar</option>
                          <option value='RE'>Réunion</option>
                          <option value='RO'>Romania</option>
                          <option value='RU'>Russian Federation</option>
                          <option value='RW'>Rwanda</option>
                          <option value='BL'>Saint Barthélemy</option>
                          <option value='SH'>Saint Helena, Ascension and Tristan da Cunha</option>
                          <option value='KN'>Saint Kitts and Nevis</option>
                          <option value='LC'>Saint Lucia</option>
                          <option value='MF'>Saint Martin (French part)</option>
                          <option value='PM'>Saint Pierre and Miquelon</option>
                          <option value='VC'>Saint Vincent and the Grenadines</option>
                          <option value='WS'>Samoa</option>
                          <option value='SM'>San Marino</option>
                          <option value='ST'>Sao Tome and Principe</option>
                          <option value='SA'>Saudi Arabia</option>
                          <option value='SN'>Senegal</option>
                          <option value='RS'>Serbia</option>
                          <option value='SC'>Seychelles</option>
                          <option value='SL'>Sierra Leone</option>
                          <option value='SG'>Singapore</option>
                          <option value='SX'>Sint Maarten (Dutch part)</option>
                          <option value='SK'>Slovakia</option>
                          <option value='SI'>Slovenia</option>
                          <option value='SB'>Solomon Islands</option>
                          <option value='SO'>Somalia</option>
                          <option value='ZA'>South Africa</option>
                          <option value='GS'>South Georgia and the South Sandwich Islands</option>
                          <option value='KR'>South Korea</option>
                          <option value='SS'>South Sudan</option>
                          <option value='ES'>Spain</option>
                          <option value='LK'>Sri Lanka</option>
                          <option value='SD'>Sudan</option>
                          <option value='SR'>Suriname</option>
                          <option value='SJ'>Svalbard and Jan Mayen</option>
                          <option value='SZ'>Swaziland</option>
                          <option value='SE'>Sweden</option>
                          <option value='CH'>Switzerland</option>
                          <option value='SY'>Syrian Arab Republic</option>
                          <option value='TW'>Taiwan, Province of China</option>
                          <option value='TJ'>Tajikistan</option>
                          <option value='TZ'>Tanzania, United Republic of</option>
                          <option value='TH'>Thailand</option>
                          <option value='TL'>Timor-Leste</option>
                          <option value='TG'>Togo</option>
                          <option value='TK'>Tokelau</option>
                          <option value='TO'>Tonga</option>
                          <option value='TT'>Trinidad and Tobago</option>
                          <option value='TN'>Tunisia</option>
                          <option value='TR'>Turkey</option>
                          <option value='TM'>Turkmenistan</option>
                          <option value='TC'>Turks and Caicos Islands</option>
                          <option value='TV'>Tuvalu</option>
                          <option value='UG'>Uganda</option>
                          <option value='UA'>Ukraine</option>
                          <option value='AE'>United Arab Emirates</option>
                          <option value='GB'>United Kingdom</option>
                          <option value='US' selected={true}>
                            United States
                          </option>
                          <option value='UY'>Uruguay</option>
                          <option value='UZ'>Uzbekistan</option>
                          <option value='VU'>Vanuatu</option>
                          <option value='VE'>Venezuela, Bolivarian Republic of</option>
                          <option value='VN'>Vietnam</option>
                          <option value='VI'>Virgin Islands</option>
                          <option value='WF'>Wallis and Futuna</option>
                          <option value='EH'>Western Sahara</option>
                          <option value='YE'>Yemen</option>
                          <option value='ZM'>Zambia</option>
                          <option value='ZW'>Zimbabwe</option>
                        </select>
                      </div>
                      <div className='fv-row mb-7'>
                        <div className='d-flex flex-stack'>
                          <div className='me-5'>
                            <label className='fs-6 fw-bold'>Use as a billing adderess?</label>
                            <div className='fs-7 fw-bold text-muted'>
                              If you need more info, please check budget planning
                            </div>
                          </div>
                          <label className='form-check form-switch form-check-custom form-check-solid'>
                            <input
                              className='form-check-input'
                              name='billing'
                              type='checkbox'
                              value='1'
                              id='kt_modal_add_customer_billing'
                              checked={true}
                            />
                            <span
                              className='form-check-label fw-bold text-muted'
                              // htmlFor='kt_modal_add_customer_billing'
                            >
                              Yes
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='modal-footer flex-center'>
                  <button
                    type='reset'
                    id='kt_modal_add_customer_cancel'
                    className='btn btn-light me-3'
                  >
                    Discard
                  </button>
                  <button
                    type='submit'
                    id='kt_modal_add_customer_submit'
                    className='btn btn-primary'
                  >
                    <span className='indicator-label'>Submit</span>
                    <span className='indicator-progress'>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2' />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </>
  )
}

export {CreatePageCard}
