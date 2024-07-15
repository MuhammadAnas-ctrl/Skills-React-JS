import  './Main.css'

const Main =()=>{
let values = [{
    name:"JAVASCRIPT"
    ,
    name:"WORDPRESS"
}]
    return(
    <div className='Main'>
    <main className='main1'>
        <h5>ADOBE PHOTOSHOP</h5>
 
<progress class="progress is-warning" value="90" max="100">
  90%
</progress><br /><br />
        <h5>JAVASCRIPRT</h5>
 
<progress class="progress is-warning1" value="85" max="100">
  75%
</progress> <br /> <br />
        <h5>WORDPRESS</h5>
        <progress class="progress-is-warning2" value="70" max="100">
  75%
</progress> <br /> <br />
        </main>
    <main className='main2'>

        <h5>FIGMA</h5>
                <progress class="progress-is-warning3" value="95" max="100">
  75%
</progress> <br /> <br />
        <h5>HTML5</h5>
                <progress class="progress-is-warning4" value="95" max="100">
  75%
</progress> <br /> <br />
        <h5>ADOBE XD</h5>
                <progress class="progress-is-warning5" value="75" max="100">
  75%
</progress> <br /> <br />
        </main>
    <main className='main3'>

        <h5>ADOBE ILLUSTRATOR</h5>
                <progress class="progress-is-warning6" value="90" max="100">
  75%
</progress> <br /> <br />
        <h5>CSS3</h5>
                <progress class="progress-is-warning7" value="90" max="100">
  75%
</progress> <br /> <br />
        <h5>SEO</h5>
                <progress class="progress-is-warning8" value="80" max="100">
  75%
</progress> <br /> <br />
        </main>


    </div>
    )


}
export default Main