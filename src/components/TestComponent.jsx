import React from 'react';

const TestComponent = () => {
  return (
    <div style={{ 
      padding: '50px', 
      backgroundColor: '#0E82FD', 
      color: 'white', 
      textAlign: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Teste - Mind's Club VSL</h1>
      <p>Se você está vendo esta página, o React está funcionando!</p>
      <div style={{ 
        backgroundColor: 'white', 
        color: '#0E82FD', 
        padding: '20px', 
        margin: '20px',
        borderRadius: '10px'
      }}>
        <h2>Componente de Teste</h2>
        <p>Esta é uma versão simplificada para debug.</p>
        <button style={{
          backgroundColor: '#0E82FD',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Botão de Teste
        </button>
      </div>
    </div>
  );
};

export default TestComponent;
