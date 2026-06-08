// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do simulador
    const btnCalcular = document.getElementById('calcularBtn');
    const contaMensalInput = document.getElementById('contaMensal');
    const reducaoSelect = document.getElementById('reducaoSelect');
    const investimentoInput = document.getElementById('investimento');
    const resultadoDiv = document.getElementById('resultadoCalc');
    
    // Função para formatar valores em moeda brasileira
    function formatMoney(value) {
        return value.toLocaleString('pt-BR', { 
            style: 'currency', 
            currency: 'BRL' 
        });
    }
    
    // Função principal de cálculo
    function calcularEconomia() {
        // Obtém valores dos inputs
        let conta = parseFloat(contaMensalInput.value);
        let reducaoPercent = parseFloat(reducaoSelect.value);
        let investimento = parseFloat(investimentoInput.value);
        
        // Validação dos dados
        if (isNaN(conta) || conta <= 0) {
            resultadoDiv.innerHTML = `
                <p style="font-weight:bold;">⚠️ Atenção</p>
                <p>Digite um valor válido para a conta de luz mensal.</p>
            `;
            return;
        }
        
        if (isNaN(investimento) || investimento < 0) {
            investimento = 0;
        }
        
        // Cálculos financeiros
        const economiaMensal = conta * (reducaoPercent / 100);
        const economiaAnual = economiaMensal * 12;
        const paybackAnos = investimento > 0 ? (investimento / economiaAnual).toFixed(1) : "0";
        const economia10Anos = economiaAnual * 10;
        const lucroAposPayback = economiaAnual * 10 - investimento;
        
        // Monta o HTML do resultado
        let html = `
            <p style="font-size:1.2rem; font-weight:bold;">🔋 Economia mensal estimada: ${formatMoney(economiaMensal)}</p>
            <p>💰 Economia anual: <strong>${formatMoney(economiaAnual)}</strong></p>
            <p>⏳ Tempo de retorno do investimento: aproximadamente ${paybackAnos} anos</p>
            <p>📈 Em 10 anos, economia total: ${formatMoney(economia10Anos)}</p>
        `;
        
        if (investimento > 0) {
            if (lucroAposPayback > 0) {
                html += `<p>🌟 Lucro estimado após o payback em 10 anos: ${formatMoney(lucroAposPayback)}</p>`;
            } else {
                html += `<p>🔄 Em 10 anos você terá economizado o suficiente para cobrir o investimento e ainda ter ganhos.</p>`;
            }
        }
        
        html += `<p style="margin-top:12px; font-size:0.8rem;">✅ Valores baseados em tarifas médias do Paraná e irradiação solar favorável.</p>`;
        
        resultadoDiv.innerHTML = html;
    }
    
    // Adiciona evento de clique ao botão
    if (btnCalcular) {
        btnCalcular.addEventListener('click', calcularEconomia);
    }
    
    // Adiciona evento de pressionar Enter nos inputs
    const inputs = [contaMensalInput, investimentoInput];
    inputs.forEach(input => {
        if (input) {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    calcularEconomia();
                }
            });
        }
    });
    
    if (reducaoSelect) {
        reducaoSelect.addEventListener('change', calcularEconomia);
    }
    
    // Executa cálculo inicial com valores padrão
    calcularEconomia();
    
    // Smooth scroll para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === "#" || href === "") return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Pequeno efeito de animação para os cards ao carregar
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});