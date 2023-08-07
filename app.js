function calcularPrestamo() {
    const monto = parseFloat(document.getElementById("monto").value);
    const tasa = parseFloat(document.getElementById("tasa").value);
    const plazo = parseInt(document.getElementById("plazo").value);

    if (isNaN(monto) || isNaN(tasa) || isNaN(plazo) || monto <= 0 || tasa <= 0 || plazo <= 0) {
        document.getElementById("resultado").textContent = "Por favor, ingresa valores válidos.";
        return;
    }

    const tasaInteresMensual = tasa / 100 / 12;
    const cuotaMensual = (monto * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -plazo));

    document.getElementById("resultado").textContent = `Cuota mensual: $${cuotaMensual.toFixed(2)}`;

    // Desglose de pagos mensuales
    let desglose = "<h3>Desglose de Pagos Mensuales:</h3><table><tr><th>Mes</th><th>Cuota</th><th>Interés</th><th>Principal</th><th>Saldo Restante</th></tr>";
    let saldoRestante = monto;

    for (let mes = 1; mes <= plazo; mes++) {
        const interesMensual = saldoRestante * tasaInteresMensual;
        const principalMensual = cuotaMensual - interesMensual;
        saldoRestante -= principalMensual;

        desglose += `<tr><td>${mes}</td><td>$${cuotaMensual.toFixed(2)}</td><td>$${interesMensual.toFixed(2)}</td><td>$${principalMensual.toFixed(2)}</td><td>$${saldoRestante.toFixed(2)}</td></tr>`;
    }

    desglose += "</table>";
    document.getElementById("desglose").innerHTML = desglose;
}
