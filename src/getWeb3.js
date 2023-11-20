import Web3 from 'web3';

const getWeb3 = () => 
  new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          resolve(web3);
        } catch (error) {
          reject('Korisnik je odbio pristup nalogu.');
        }
      } else if (window.web3) {
        resolve(window.web3);
      } else {
        reject('Morate instalirati Metamask.');
      }
    });
  });

export default getWeb3;
