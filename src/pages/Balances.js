import React from 'react';

function Balances({
  communityFundCelo,
  communityFundUSDm,
  communityFundEURm,
  mentoReserveCelo,
  mentoReserveUSDm,
  mentoReserveEURm,
  celoPrice,
  eurPrice
}) {

  return (
    <div style={{ padding: '20px 0' }}>
      <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
        <h4 style={{ marginBottom: '10px', color: '#FCFF52' }}>Token Balances in Community Fund</h4>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ padding: '10px', background: 'rgba(252,255,82,0.2)', borderRadius: '5px', minWidth: '150px' }}>
            <p style={{ margin: '0', fontSize: '14px', color: '#ccc' }}>CELO</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '20px', fontWeight: 'bold' }}>{communityFundCelo.toLocaleString()}</p>
            {celoPrice > 0 && (
              <>
                <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#999' }}>@ ${celoPrice.toFixed(4)}</p>
                <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#56DF7C' }}>${(communityFundCelo * celoPrice).toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
              </>
            )}
          </div>
          <div style={{ padding: '10px', background: 'rgba(86,223,124,0.2)', borderRadius: '5px', minWidth: '150px' }}>
            <p style={{ margin: '0', fontSize: '14px', color: '#ccc' }}>USDm</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '20px', fontWeight: 'bold' }}>{communityFundUSDm.toLocaleString()}</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#999' }}>@ $1.00</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#56DF7C' }}>${communityFundUSDm.toLocaleString()}</p>
          </div>
          <div style={{ padding: '10px', background: 'rgba(124,192,255,0.2)', borderRadius: '5px', minWidth: '150px' }}>
            <p style={{ margin: '0', fontSize: '14px', color: '#ccc' }}>EURm</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '20px', fontWeight: 'bold' }}>{communityFundEURm.toLocaleString()}</p>
            {eurPrice > 0 && (
              <>
                <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#999' }}>@ ${eurPrice.toFixed(4)}</p>
                <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#56DF7C' }}>${(communityFundEURm * eurPrice).toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
              </>
            )}
          </div>
        </div>
        {(celoPrice > 0 || eurPrice > 0) && (
          <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(86,223,124,0.1)', borderRadius: '5px', textAlign: 'center' }}>
            <p style={{ margin: '0', fontSize: '14px', color: '#ccc' }}>Community Fund Subtotal (USD)</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '20px', fontWeight: 'bold', color: '#56DF7C' }}>
              ${((communityFundCelo * celoPrice) + communityFundUSDm + (communityFundEURm * eurPrice)).toLocaleString(undefined, {maximumFractionDigits: 0})}
            </p>
          </div>
        )}
      </div>

      <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
        <h4 style={{ marginBottom: '10px', color: '#FCFF52' }}>Token Balances in Mento Treasury Reserve</h4>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ padding: '10px', background: 'rgba(252,255,82,0.2)', borderRadius: '5px', minWidth: '150px' }}>
            <p style={{ margin: '0', fontSize: '14px', color: '#ccc' }}>CELO</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '20px', fontWeight: 'bold' }}>{mentoReserveCelo.toLocaleString()}</p>
            {celoPrice > 0 && (
              <>
                <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#999' }}>@ ${celoPrice.toFixed(4)}</p>
                <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#56DF7C' }}>${(mentoReserveCelo * celoPrice).toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
              </>
            )}
          </div>
          <div style={{ padding: '10px', background: 'rgba(86,223,124,0.2)', borderRadius: '5px', minWidth: '150px' }}>
            <p style={{ margin: '0', fontSize: '14px', color: '#ccc' }}>USDm</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '20px', fontWeight: 'bold' }}>{mentoReserveUSDm.toLocaleString()}</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#999' }}>@ $1.00</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#56DF7C' }}>${mentoReserveUSDm.toLocaleString()}</p>
          </div>
          <div style={{ padding: '10px', background: 'rgba(124,192,255,0.2)', borderRadius: '5px', minWidth: '150px' }}>
            <p style={{ margin: '0', fontSize: '14px', color: '#ccc' }}>EURm</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '20px', fontWeight: 'bold' }}>{mentoReserveEURm.toLocaleString()}</p>
            {eurPrice > 0 && (
              <>
                <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#999' }}>@ ${eurPrice.toFixed(4)}</p>
                <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#56DF7C' }}>${(mentoReserveEURm * eurPrice).toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
              </>
            )}
          </div>
        </div>
        {(celoPrice > 0 || eurPrice > 0) && (
          <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(86,223,124,0.1)', borderRadius: '5px', textAlign: 'center' }}>
            <p style={{ margin: '0', fontSize: '14px', color: '#ccc' }}>Mento Reserve Subtotal (USD)</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '20px', fontWeight: 'bold', color: '#56DF7C' }}>
              ${((mentoReserveCelo * celoPrice) + mentoReserveUSDm + (mentoReserveEURm * eurPrice)).toLocaleString(undefined, {maximumFractionDigits: 0})}
            </p>
          </div>
        )}
      </div>

      {(celoPrice > 0 || eurPrice > 0) && (
        <div style={{ marginTop: '20px', padding: '20px', background: 'rgba(86,223,124,0.2)', borderRadius: '8px', border: '2px solid #56DF7C' }}>
          <p style={{ margin: '0', fontSize: '18px', color: '#FCFF52', textAlign: 'center' }}>Combined Total Value (USD)</p>
          <p style={{ margin: '10px 0 0 0', fontSize: '32px', fontWeight: 'bold', color: '#56DF7C', textAlign: 'center' }}>
            ${(
              (communityFundCelo * celoPrice) + communityFundUSDm + (communityFundEURm * eurPrice) +
              (mentoReserveCelo * celoPrice) + mentoReserveUSDm + (mentoReserveEURm * eurPrice)
            ).toLocaleString(undefined, {maximumFractionDigits: 0})}
          </p>
        </div>
      )}
    </div>
  );
}

export default Balances;
