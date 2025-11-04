// import './App.css'
import Alert from './component/ui/alert/Alert'
import { BellRing, Info, CheckCheck, Ban, AlertTriangle } from 'lucide-react'
function App() {


  return (
    <div style={{ margin: '2rem' }} >
      {/* default */}
      <Alert
        icon={<BellRing size={20} />}
        title={"alert title"}
        description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium molestiae veniam repudiandae quod ea. Ut corrupti, quasi optio repudiandae molestias aut maiores, accusamus libero hic excepturi et quidem, illo laudantium."}
      />
      {/* danger */}
      <Alert
        icon={<Ban size={20} />}
        title={"alert title"}
        type={"alert-danger"}
        description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium molestiae veniam repudiandae quod ea. Ut corrupti, quasi optio repudiandae molestias aut maiores, accusamus libero hic excepturi et quidem, illo laudantium."}
      />
      {/* info */}
      <Alert
        icon={<Info size={20} />}
        title={"alert title"}
        type={"alert-info"}
        description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium molestiae veniam repudiandae quod ea. Ut corrupti, quasi optio repudiandae molestias aut maiores, accusamus libero hic excepturi et quidem, illo laudantium."}
      />
      {/* warning */}

      <Alert
        icon={<AlertTriangle size={20} />}
        title={"alert title"}
        type={"alert-warning"}
      >
        <p>Lorem ipsum dolor sit <a href="/">amet consectetur adipisicing elit. Voluptatum accusamus ut veritatis ex officiis eligendi aut iure dolorum</a>, accusantium itaque labore, dicta laborum explicabo excepturi facere temporibus inventore maxime minima.</p>
      </Alert>
      {/* success */}
      <Alert
        type={"alert-success"}
        icon={<CheckCheck size={20} />}
        title={"Your order has been processed"}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />

    </div>
  )
}

export default App
//rafce