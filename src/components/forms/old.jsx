// ol d card form 

<div className="inputs">
<div className="inputHolder">
    <label> Your Card Number : </label>
    <input type="number" name="card_number" id="card"/>
</div>

<div className="inputHolder">
    <label> Card Valid Still : </label>
    <div className="two">
        <select name="" id="">
            <option defaultChecked value=""> 12 </option>
            <option value=""> 9 </option>
        </select>

        <select name="" id="">
            <option defaultChecked value=""> 20 </option>
            <option value=""> 21 </option>
        </select>
    </div>
</div>

<div className="inputHolder">
    <label> Verfifcation Code  : </label>
    <div className="towEnd">
    <input type="number" name="card_number" id="card"/>
   <MoreIcon>
       <p> Your CVV code  </p>s
       <img src={cvv} width="200px" alt=""/>
   </MoreIcon>
    </div>
</div>

</div> 

