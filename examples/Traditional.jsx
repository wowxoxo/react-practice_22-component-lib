import { Tabs } from "Tabs"

function MyTabs() {
  return (
    <Tabs onChange={() => console.log('tasb is changed')} tabs={[
      { name: "Pie"  },
      { name: 'Cake', className: 'custom-tab' },
      { name: 'Candies', disabled: true},
      { name: 'Cookies' }
    ]}   />
  )
}


function MyTabs1() {
  return (
    <Tabs onChange={() => console.log('tasb is changed')}>
      <Tabs.Tab>Pie</Tabs.Tab>
      <Tabs.Tab className="custom-tab">Cake</Tabs.Tab>
      <Tabs.Tab disabled={true}>Candies</Tabs.Tab>
      <Tabs.Tab>Cookies</Tabs.Tab>
    </Tabs>
  )
}


<select>
  <option>1</option>
  <option>2</option>
</select>

const Input = (id) => {
  return <div>
    <label for="input"></label>
    <input id="input"/>
  </div>
}

<Input id="uniq-id" label="dd" placeholder="Enter"  />

