import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="container">
        <div id="main">
          <div className="section-info">
            <div className="row">
              <div className="col-sm-6">
                <form
                  name="insightly_web_to_lead"
                  action="https://crm.na1.insightly.com/WebToLead/Create"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="formId"
                    value="VCYbYYrJDcnYFMhZmHAkkw=="
                    className="input-text full-width"
                  />
                  <div className="form-group">
                    <label for="insightly_firstName">First Name: </label>
                    <input
                      id="insightly_firstName"
                      name="FirstName"
                      type="text"
                      placeholder="First Name"
                      className="input-text full-width"
                    />
                  </div>
                  <div className="form-group">
                    <label for="insightly_lastName">Last Name: </label>
                    <input
                      id="insightly_lastName"
                      name="LastName"
                      type="text"
                      placeholder="Last Name"
                      className="input-text full-width"
                    />
                  </div>
                  <div className="form-group">
                    <label for="insightly_organization">Organization: </label>
                    <input
                      id="insightly_organization"
                      name="OrganizationName"
                      type="text"
                      placeholder="Organization"
                      className="input-text full-width"
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">Email: </label>
                    <input
                      id="insightly_Email"
                      name="email"
                      type="text"
                      placeholder="Email"
                      className="input-text full-width"
                    />
                  </div>
                  <div className="form-group">
                    <label for="phone">Phone: </label>
                    <input
                      id="insightly_Phone"
                      name="phone"
                      type="text"
                      placeholder="Phone"
                      className="input-text full-width"
                    />
                  </div>
                  <input
                    type="hidden"
                    id="insightly_ResponsibleUser"
                    name="ResponsibleUser"
                    value="1640995"
                    className="input-text full-width"
                  />
                  <input
                    type="hidden"
                    id="insightly_LeadSource"
                    name="LeadSource"
                    value="2575149"
                    className="input-text full-width"
                  />
                  <div className="form-group">
                    <button type="submit" className="btn style1" value="Submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
