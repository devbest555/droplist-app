import React, { useEffect, useState } from "react";
import styled from 'styled-components/macro';
import Loader from "react-loader-spinner";
import { ButtonSecondary } from "./components/Button";
import './App.css';
import axios from 'axios';

const chainId = {'eth': 1, 'bsc': 56};
const base_api = "https://api.covalenthq.com/v1/";
const api_key = "ckey_1f8321e72d4f4a799524e9d8656";

const end_block = 13133268;
const start_block = 7074618;
const lock_tao_addr = "0x97633103048Fa891ffE9bbe645Ed68bd5eD3B2c1";

// https://api.covalenthq.com/v1/1/tokens/0x3883f5e181fccaf8410fa61e12b59bad963fb645/token_holders/?quote-currency=USD&format=JSON&block-height=13728466&key=ckey_1f8321e72d4f4a799524e9d8656

// https://api.covalenthq.com/v1/1/tokens/0x3883f5e181fccaf8410fa61e12b59bad963fb645/token_holders_changes/?quote-currency=USD&format=JSON&starting-block=12500100&ending-block=13210000&page-size=1000&key=ckey_1f8321e72d4f4a799524e9d8656

function App() {

  const [renderData, setRenderData] = useState([]);
  const [loading, setLoading] = useState(false);
  const TableWrapper = styled.div`
    max-height: 85vh;
    overflow-y: auto;
    width: 60vw;        
    margin-left: 15%;
    margin-right: 15%;
    table {
      border-spacing: 0;
      border: 1px solid grey;
      width: 100%;  
      tr {
        :last-child {
          td {
            border-bottom: 0;
          }
        }
      }
      th, td {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid grey;
        border-right: 1px solid grey;
        :last-child {
          border-right: 0;
        }
      }  
    }
  `
  const LoaderWrapper = styled.div`
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    z-index: 2;
    margin-left: -4px;
    svg {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    img {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
  `
  
  // const api = base_api + chainId.bsc + "/tokens/" + lock_tao_addr + "/token_holders/?block-height="+end_block+"&key=" + api_key;
  
  const api_2_blocks = base_api + chainId.bsc + "/tokens/" + lock_tao_addr + "/token_holders_changes/?starting-block="+start_block+"&ending-block="+end_block+"&page-size="+1000+"&key=" + api_key;

  const getHolderData = async () => {
      setLoading(true);
      await axios.get(api_2_blocks).then((res) => {
        const res_data = res.data;
        if(res_data) {
          console.log("====res::", res_data.data.items);          
          setRenderData(res_data.data.items);
          setLoading(false);
        }
      }).catch((err) => {
          console.log("====err::", err);
          setLoading(false);
      });
  }

  return (
    <div className="App">
      {loading &&
        <LoaderWrapper>
          <Loader
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100} />
        </LoaderWrapper>
      }
      <header className="App-header">
        <div className="btn_div">
            <ButtonSecondary
                onClick={() => getHolderData()}
                padding={'10px 20px'}
                BGColor={'#2a4365'}
                width={'330px'} >
                Get Holder Data
            </ButtonSecondary>
        </div>
        <TableWrapper>          
          <table>
            <thead>
                <tr>
                  <th>No</th>
                  <th>Holder Address</th>
                  <th>Token Amount</th>
                </tr>
            </thead>
            <tbody>
              {renderData.map((item, i) => {
                const num = i + 1;
                return (
                  <tr key={i}>
                      <td width="10%">{num}</td>
                      <td width="60%">{item.token_holder}</td>
                      <td width="30%">{item.next_balance}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </TableWrapper>
      </header>

        
    </div>
  );
}

export default App;
