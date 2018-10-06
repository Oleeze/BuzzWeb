import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <form
          name="insightly_web_to_lead"
          action="https://crm.na1.insightly.com/WebToLead/Create"
          method="post"
        >
          <input type="hidden" name="formId" value="VCYbYYrJDcnYFMhZmHAkkw==" />
          <label for="insightly_firstName">First Name: </label>
          <input id="insightly_firstName" name="FirstName" type="text" />
          <br />
          <label for="insightly_lastName">Last Name: </label>
          <input id="insightly_lastName" name="LastName" type="text" />
          <br />
          <label for="insightly_organization">Organization: </label>
          <input
            id="insightly_organization"
            name="OrganizationName"
            type="text"
          />
          <br />
          <label for="email">Email: </label>
          <input id="insightly_Email" name="email" type="text" />
          <br />
          <label for="phone">Phone: </label>
          <input id="insightly_Phone" name="phone" type="text" />
          <br />
          <input
            type="hidden"
            id="insightly_ResponsibleUser"
            name="ResponsibleUser"
            value="1640995"
          />
          <input
            type="hidden"
            id="insightly_LeadSource"
            name="LeadSource"
            value="2575149"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
