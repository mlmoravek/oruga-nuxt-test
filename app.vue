<template>
  <section>
    <o-button label="TESt" />
    <o-notification
        closable
        variant="primary"
        aria-close-label="Close notification">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
        fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit
        sapien laoreet elit
    </o-notification>   
    
    <o-field label="Name">
    <o-switch label="TEST" />
    </o-field>
    
    <o-field label="Name">
          <o-input model-value="Kevin Garvey" />
      </o-field>

      <o-field label="Email" variant="danger" message="This email is invalid">
          <o-input type="email" model-value="john@" :maxlength="30" />
      </o-field>

      <o-field
          label="Username"
          variant="success"
          message="This username is available">
          <o-input model-value="johnsilver" :maxlength="30" />
      </o-field>

      <o-field label="Password" variant="warning">
          <o-input model-value="123" type="password" :maxlength="30" />
      </o-field>

      <o-field label="Subject">
          <o-select placeholder="Select a subject">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
          </o-select>
      </o-field>

      <o-field
          label="Wrong subject"
          variant="danger"
          message="Selected subject is wrong">
          <o-select placeholder="Select a subject">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
          </o-select>
      </o-field>
    
    
    
    
    
    
    
    
    
    
        <o-field
            horizontal
            label="Subject"
            variant="danger"
            message="Please enter a subject">
            <o-input name="subject" expanded />
        </o-field>

        <o-field horizontal label="From">
            <o-input name="name" placeholder="Name" expanded />
            <o-input
                name="email"
                type="email"
                placeholder="nobody@nowhere.com"
                expanded />
        </o-field>

        <o-field horizontal label="Topic">
            <o-select placeholder="Select a topic">
                <option value="1">Oruga</option>
                <option value="2">Vue.js</option>
                <option value="3">UI</option>
            </o-select>
        </o-field>

        <o-field horizontal label="Message">
            <o-input type="textarea" />
        </o-field>

        <o-field horizontal>
            <o-button
                variant="primary"
                icon-left="envelope"
                label="Send message"
                outlined />
        </o-field>

  </section>
</template>
