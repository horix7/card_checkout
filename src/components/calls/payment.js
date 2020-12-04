import axios from "axios";

export default class Payment {
  chechStatusMomo = (id, setLoading, seterrorMade, setScucess) => {
    let link = `https://sawafitness.herokuapp.com/api/payment/${id}`;
    axios({
      method: "get",
      url: link,
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.token === "pending") {
          // setLabel("Verify Payment On Your Mobile ");
          this.chechStatusMomo(id, setLoading, seterrorMade, seterrorMade);
        } else if (response.data.token === "failed") {
          setLoading(false);

          seterrorMade(true);
        } else if (response.data.token === "successful") {
          setLoading(false);
          setScucess(true);
        }
      })
      .catch((err) => {
        setLabel("You Took Too long To Confirm");
        setTimeout(() => {
          setLoading(false);
          seterrorMade(true);
        }, 2000);
      });
  };

  payMomo = async (setLoading, seterrorMade, number, setScucess) => {
    let postForPayment = {
      trxRef: `${new Date().getTime()}-${Math.round(
        Math.random() * 10000123123141000
      ).toString()}`,
      channelId: "momo-mtn-rw",
      accountId: "6f5b098a-d46c-403c-b596-14181a054a87",
      msisdn: number,
      amount: 100,
      callback: "https://sawafitness.herokuapp.com/",
    };
    setLoading(true);

    try {
      const paymentReq = await axios.post(
        "https://sawafitness.herokuapp.com/api/payment/",
        postForPayment
      );

      if (paymentReq.data.data.state === "processing") {
        this.chechStatusMomo(postForPayment.trxRef, setLoading, seterrorMade);
      } else {
        seterrorMade(true);

        setLoading(false);
      }
    } catch (error) {
      seterrorMade(true);
      setLoading(false);
    }
  };
}
