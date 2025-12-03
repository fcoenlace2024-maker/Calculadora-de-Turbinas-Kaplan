function PotenciaDeLaTurbina (){
    const CAPINST = Number(document.getElementById("N1").value);
    const FACTORK = 1.075;
    const NoUnidades = Number(document.getElementById("N2").value);
    const ng = Number(document.getElementById("N3").value);
    const multiplicar1 = CAPINST*FACTORK;
    const multiplicar2 = NoUnidades*ng;
    document.getElementById("Pt").innerText=multiplicar1/multiplicar2;
}
//Cálculo de Velocidad Específica (Ns)
function VelocidadEspecífica (){
    const REV = Number(document.getElementById("N7").value);¿v
    const Hd = Number(document.getElementById("N5").value);

    const Pt = Number(document.getElementById("Pt").innerText);

    const elevacion1 = Pt**(0.5);
    const elevacion2 = Hd**(-1.25);

    document.getElementById("Ns").innerText=REV*elevacion1*elevacion2;
}
// Cálculo de la Ecuación de Regresión (N's)
function EcuaciónDeRegresión (){
    const CONSTANTEECUACIÓN = 2419;
    const Hd = Number(document.getElementById("N5").value);

    const elevacion3 = Hd**(-0.489);

    document.getElementById("Nprima s").innerText=CONSTANTEECUACIÓN*elevacion3;
}
// Cálculo de la Velocidad de Rotación Síncrona (N prima)
function VelocidadDeRotaciónSíncrona (){
    const Nprimas = Number(document.getElementById("Nprimas").innerText);
    const Pt = Number(document.getElementById("Pt").innerText);
    const Hd = Number(document.getElementById("N5").value);

    const elevacion4 = Pt**(-0.5);
    const elevacion5 = Hd**(1.25);

    document.getElementById("Nprima").innerText=Nprimas*elevacion4*elevacion5;
}
// Cálculo del coeficiente de Velocidad Media (FI)
function CoeficienteDeVelocidadMedia (){
    const CONSTANTECOEFICIENTEVELOCIDADMEDIA = 0.79;
    const VALORVELOCIDADMEDIA = 0.00161;
    const Ns = Number(document.getElementById("Ns").innerText);

    const multiplicarCoVelMed = Ns*VALORVELOCIDADMEDIA;

    document.getElementById("Fi").innerText= CONSTANTECOEFICIENTEVELOCIDADMEDIA+multiplicarCoVelMed;
}
//Cálculo del Diámetro de Salida
function DiametroDeSalida (){
    const CONSTANTEDIAMETROSALIDA = 84.5;
    const FI = Number(document.getElementById("Fi").innerText);
    const Hd = Number(document.getElementById("N5").value);
    const Nprima = Number(document.getElementById("Nprima").innerText);
    const raizDSALIDA = Math.sqrt(Hd);
    const divisionDSALIDA = raizDSALIDA/Nprima;
    document.getElementById("DM").innerText= CONSTANTEDIAMETROSALIDA*FI*divisionDSALIDA;
}
//Cálculo del Caudal de Diseño
function Caudaldediseño (){
    const Pt = Number (document.getElementById("Pt").innerText);
    const EficienciaTurbina = Number (document.getElementById("N8").value);
    const PesoVolumetricoAgua = Number (document.getElementById("N6").value);
    const Hd = Number (document.getElementById("N5").value);

    const Denominador = EficienciaTurbina*PesoVolumetricoAgua*Hd;
    const Qd1 = Pt/Denominador;
    const Qd = Qd1*101.9367992;

    document.getElementById("Qd").innerText = Qd;
}
//Funciones de cálculo para Dm, Hm, H1 y H
//Cálculo de Dm Diametro Medio del Rodete
function DiametroMedioDelRodete(){
    const constante1Dm = 0.25;
    const constante2Dm = 94.64;
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    const operacion1Dm = constante2Dm/Ns;
    const operación2Dm = constante1Dm+operacion1Dm;

    document.getElementById("Dm").innerText= DM*(operación2Dm);
}
//Cálculo de Hm Altura media del álabe
function AlturaMediaDelÁlabe(){
    const constante1Hm = 6.94;
    const constante2Hm = -0.403;
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    const operacion1Hm = math.pow(Ns,constante2Hm); 
    const operación2Hm = constante1Hm*(operacion1Hm);

    document.getElementById("Dm").innerText= DM*(operación2Hm);
}

[cite_start]

// Cálculo de la Dimensión A1
function CarcazaDimensionA1 (){
    // Lectura de valores previamente calculados
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    [cite_start]// Constantes de la fórmula: A1 / DM = 0.40 * Ns^0.20 [cite: 1]
    const CONSTANTE_A1 = 0.40;
    const EXPONENTE_A1 = 0.20;

    // Operaciones
    const operacionPotencia = Math.pow(Ns, EXPONENTE_A1);
    const relacionA1 = CONSTANTE_A1 * operacionPotencia;

    // Resultado
    document.getElementById("A1").innerText = DM * relacionA1;
}

// Cálculo de la Dimensión B1
function CarcazaDimensionB1 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    [cite_start]// Constantes de la fórmula: B1 / DM = 1.26 + 3.79 * (10^-4) * Ns [cite: 1]
    const CONSTANTE1_B1 = 1.26;
    const CONSTANTE2_B1 = 0.000379; // Equivalente a 3.79 * 10^-4

    // Operaciones
    const multiplicarB1 = CONSTANTE2_B1 * Ns;
    const relacionB1 = CONSTANTE1_B1 + multiplicarB1;

    // Resultado
    document.getElementById("B1").innerText = DM * relacionB1;
}

// Cálculo de la Dimensión C1
function CarcazaDimensionC1 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    [cite_start]// Constantes de la fórmula: C1 / DM = 1.46 + 3.24 * (10^-4) * Ns [cite: 1]
    const CONSTANTE1_C1 = 1.46;
    const CONSTANTE2_C1 = 0.000324; // Equivalente a 3.24 * 10^-4

    // Operaciones
    const multiplicarC1 = CONSTANTE2_C1 * Ns;
    const relacionC1 = CONSTANTE1_C1 + multiplicarC1;

    // Resultado
    document.getElementById("C1").innerText = DM * relacionC1;
}

// Cálculo de la Dimensión D1
function CarcazaDimensionD1 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    [cite_start]// Constantes de la fórmula: D1 / DM = 1.59 + 5.74 * (10^-4) * Ns [cite: 1]
    const CONSTANTE1_D1 = 1.59;
    const CONSTANTE2_D1 = 0.000574; // Equivalente a 5.74 * 10^-4

    // Operaciones
    const multiplicarD1 = CONSTANTE2_D1 * Ns;
    const relacionD1 = CONSTANTE1_D1 + multiplicarD1;

    // Resultado
    document.getElementById("D1").innerText = DM * relacionD1;
}

// Cálculo de la Dimensión E1
function CarcazaDimensionE1 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    [cite_start]// Constantes de la fórmula: E1 / DM = 1.21 + 2.71 * (10^-4) * Ns [cite: 1]
    const CONSTANTE1_E1 = 1.21;
    const CONSTANTE2_E1 = 0.000271; // Equivalente a 2.71 * 10^-4

    // Operaciones
    const multiplicarE1 = CONSTANTE2_E1 * Ns;
    const relacionE1 = CONSTANTE1_E1 + multiplicarE1;

    // Resultado
    document.getElementById("E1").innerText = DM * relacionE1;
}

// Cálculo de la Dimensión F1
function CarcazaDimensionF1 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    [cite_start]// Constantes de la fórmula: F1 / DM = 1.45 + 72.17 / Ns [cite: 1]
    const CONSTANTE1_F1 = 1.45;
    const CONSTANTE2_F1 = 72.17;

    // Operaciones
    const dividirF1 = CONSTANTE2_F1 / Ns;
    const relacionF1 = CONSTANTE1_F1 + dividirF1;

    // Resultado
    document.getElementById("F1").innerText = DM * relacionF1;
}

// Cálculo de la Dimensión G1
function CarcazaDimensionG1 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    [cite_start]// Constantes de la fórmula: G1 / DM = 1.29 + 41.63 / Ns [cite: 1]
    const CONSTANTE1_G1 = 1.29;
    const CONSTANTE2_G1 = 41.63;

    // Operaciones
    const dividirG1 = CONSTANTE2_G1 / Ns;
    const relacionG1 = CONSTANTE1_G1 + dividirG1;

    // Resultado
    document.getElementById("G1").innerText = DM * relacionG1;
}

// Cálculo de la Dimensión H1
function CarcazaDimensionH1 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Fórmula: H1 / DM = 0.81 + 0.0003 * Ns
    const CONSTANTE1_H1 = 0.81;
    const CONSTANTE2_H1 = 0.0003;

    // Operaciones
    const multiplicarH1 = CONSTANTE2_H1 * Ns;
    const relacionH1 = CONSTANTE1_H1 + multiplicarH1;

    // Resultado
    document.getElementById("H1").innerText = DM * relacionH1;
}

// Cálculo de la Dimensión I1
function CarcazaDimensionI1 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Fórmula: I1 / DM = 1.05 + 0.00078 * Ns
    const CONSTANTE1_I1 = 1.05;
    const CONSTANTE2_I1 = 0.00078;

    // Operaciones
    const multiplicarI1 = CONSTANTE2_I1 * Ns;
    const relacionI1 = CONSTANTE1_I1 + multiplicarI1;

    // Resultado
    document.getElementById("I1").innerText = DM * relacionI1;
}

// Cálculo de la Dimensión L1
function CarcazaDimensionL1 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Fórmula: L1 / DM = 1.50 + 0.00019 * Ns
    const CONSTANTE1_L1 = 1.50;
    const CONSTANTE2_L1 = 0.00019;

    // Operaciones
    const multiplicarL1 = CONSTANTE2_L1 * Ns;
    const relacionL1 = CONSTANTE1_L1 + multiplicarL1;

    // Resultado
    document.getElementById("L1").innerText = DM * relacionL1;
}

// Cálculo de la Dimensión M1
function CarcazaDimensionM1 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Fórmula: M1 / DM = 1.05 + 0.00033 * Ns
    const CONSTANTE1_M1 = 1.05;
    const CONSTANTE2_M1 = 0.00033;

    // Operaciones
    const multiplicarM1 = CONSTANTE2_M1 * Ns;
    const relacionM1 = CONSTANTE1_M1 + multiplicarM1;

    // Resultado
    document.getElementById("M1").innerText = DM * relacionM1;
}
//Calculos para la carcaza de CONCRETO

// Cálculo de la Dimensión A2
function CarcazaDimensionA2 (){
    // Lectura de valores previamente calculados
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Constantes de la fórmula: A2 / DM = 0.65 - 0.00033 * Ns
    const CONSTANTE1_A2 = 0.65;
    const CONSTANTE2_A2 = 0.00033; 

    // Operaciones
    const multiplicarA2 = CONSTANTE2_A2 * Ns;
    const relacionA2 = CONSTANTE1_A2 - multiplicarA2;

    // Resultado
    document.getElementById("A2").innerText = DM * relacionA2;
}

// Cálculo de la Dimensión B2
function CarcazaDimensionB2 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Constantes de la fórmula: B2 / DM = 1.05 + 0.00018 * Ns
    const CONSTANTE1_B2 = 1.05;
    const CONSTANTE2_B2 = 0.00018;

    // Operaciones
    const multiplicarB2 = CONSTANTE2_B2 * Ns;
    const relacionB2 = CONSTANTE1_B2 + multiplicarB2;

    // Resultado
    document.getElementById("B2").innerText = DM * relacionB2;
}

// Cálculo de la Dimensión C2
function CarcazaDimensionC2 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Constantes de la fórmula: C2 / DM = 0.81 + 0.00041 * Ns
    const CONSTANTE1_C2 = 0.81;
    const CONSTANTE2_C2 = 0.00041; 

    // Operaciones
    const multiplicarC2 = CONSTANTE2_C2 * Ns;
    const relacionC2 = CONSTANTE1_C2 + multiplicarC2;

    // Resultado
    document.getElementById("C2").innerText = DM * relacionC2;
}

// Cálculo de la Dimensión D2
function CarcazaDimensionD2 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Constantes de la fórmula: D2 / DM = 1.25 + 0.00032 * Ns
    const CONSTANTE1_D2 = 1.25;
    const CONSTANTE2_D2 = 0.00032; 

    // Operaciones
    const multiplicarD2 = CONSTANTE2_D2 * Ns;
    const relacionD2 = CONSTANTE1_D2 + multiplicarD2;

    // Resultado
    document.getElementById("D2").innerText = DM * relacionD2;
}

// Cálculo de la Dimensión E2
function CarcazaDimensionE2 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Constantes de la fórmula: E2 / DM = 0.90 + 0.00036 * Ns
    const CONSTANTE1_E2 = 0.90;
    const CONSTANTE2_E2 = 0.00036;

    // Operaciones
    const multiplicarE2 = CONSTANTE2_E2 * Ns;
    const relacionE2 = CONSTANTE1_E2 + multiplicarE2;

    // Resultado
    document.getElementById("E2").innerText = DM * relacionE2;
}

// Cálculo de la Dimensión F2
function CarcazaDimensionF2 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Constantes de la fórmula: F2 / DM = 1.30 + 0.00015 * Ns
    const CONSTANTE1_F2 = 1.30;
    const CONSTANTE2_F2 = 0.00015;

    // Operaciones
    const multiplicarF2 = CONSTANTE2_F2 * Ns;
    const relacionF2 = CONSTANTE1_F2 + multiplicarF2;

    // Resultado
    document.getElementById("F2").innerText = DM * relacionF2;
}

// Cálculo de la Dimensión G2
function CarcazaDimensionG2 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Constantes de la fórmula: G2 / DM = 1.40 + 0.00028 * Ns
    const CONSTANTE1_G2 = 1.40;
    const CONSTANTE2_G2 = 0.00028;

    // Operaciones
    const multiplicarG2 = CONSTANTE2_G2 * Ns;
    const relacionG2 = CONSTANTE1_G2 + multiplicarG2;

    // Resultado
    document.getElementById("G2").innerText = DM * relacionG2;
}

// Cálculo de la Dimensión H2
function CarcazaDimensionH2 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Fórmula: H2 / DM = 1.62 + 0.00021 * Ns
    const CONSTANTE1_H2 = 1.62;
    const CONSTANTE2_H2 = 0.00021;

    // Operaciones
    const multiplicarH2 = CONSTANTE2_H2 * Ns;
    const relacionH2 = CONSTANTE1_H2 + multiplicarH2;

    // Resultado
    document.getElementById("H2").innerText = DM * relacionH2;
}

// Cálculo de la Dimensión I2
function CarcazaDimensionI2 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Fórmula: I2 / DM = 1.15 + 0.00062 * Ns
    const CONSTANTE1_I2 = 1.15;
    const CONSTANTE2_I2 = 0.00062;

    // Operaciones
    const multiplicarI2 = CONSTANTE2_I2 * Ns;
    const relacionI2 = CONSTANTE1_I2 + multiplicarI2;

    // Resultado
    document.getElementById("I2").innerText = DM * relacionI2;
}

// Cálculo de la Dimensión J2
function CarcazaDimensionJ2 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Fórmula: J2 / DM = 1.60 + 0.00028 * Ns
    const CONSTANTE1_J2 = 1.60;
    const CONSTANTE2_J2 = 0.00028;

    // Operaciones
    const multiplicarJ2 = CONSTANTE2_J2 * Ns;
    const relacionJ2 = CONSTANTE1_J2 + multiplicarJ2;

    // Resultado
    document.getElementById("J2").innerText = DM * relacionJ2;
}

// Cálculo de la Dimensión K2
function CarcazaDimensionK2 (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Fórmula: K2 / DM = 1.40 + 0.00063 * Ns
    const CONSTANTE1_K2 = 1.40;
    const CONSTANTE2_K2 = 0.00063;

    // Operaciones
    const multiplicarK2 = CONSTANTE2_K2 * Ns;
    const relacionK2 = CONSTANTE1_K2 + multiplicarK2;

    // Resultado
    document.getElementById("K2").innerText = DM * relacionK2;
}
//Cálculos para el dimensionamiento del tubo de aspiración

// Cálculo de la Dimensión Ht
function TuboAspiracionDimensionHt (){
    // Lectura de valores previamente calculados
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Constantes de la fórmula (Asumiendo correlación empírica con Ns)
    // Fórmula: Ht / DM = 0.65 + 0.0003 * Ns
    const CONSTANTE1_HT = 0.65;
    const CONSTANTE2_HT = 0.0003; 

    // Operaciones
    const multiplicarHt = CONSTANTE2_HT * Ns;
    const relacionHt = CONSTANTE1_HT + multiplicarHt;

    // Resultado
    document.getElementById("Ht").innerText = DM * relacionHt;
}

// Cálculo de la Dimensión N
function TuboAspiracionDimensionN (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Constantes de la fórmula (Asumiendo correlación empírica con Ns)
    // Fórmula: N / DM = 0.50 + 0.0001 * Ns
    const CONSTANTE1_N = 0.50;
    const CONSTANTE2_N = 0.0001;

    // Operaciones
    const multiplicarN = CONSTANTE2_N * Ns;
    const relacionN = CONSTANTE1_N + multiplicarN;

    // Resultado
    document.getElementById("N").innerText = DM * relacionN;
}

// Cálculo de la Dimensión O
function TuboAspiracionDimensionO (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Constantes de la fórmula (Asumiendo correlación empírica con Ns)
    // Fórmula: O / DM = 0.60 + 0.0002 * Ns
    const CONSTANTE1_O = 0.60;
    const CONSTANTE2_O = 0.0002;

    // Operaciones
    const multiplicarO = CONSTANTE2_O * Ns;
    const relacionO = CONSTANTE1_O + multiplicarO;

    // Resultado
    document.getElementById("O").innerText = DM * relacionO;
}

// Cálculo de la Dimensión P
function TuboAspiracionDimensionP (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Constantes de la fórmula (Asumiendo correlación empírica con Ns)
    // Fórmula: P / DM = 1.60 + 0.0004 * Ns
    const CONSTANTE1_P = 1.60;
    const CONSTANTE2_P = 0.0004; 

    // Operaciones
    const multiplicarP = CONSTANTE2_P * Ns;
    const relacionP = CONSTANTE1_P + multiplicarP;

    // Resultado
    document.getElementById("P").innerText = DM * relacionP;
}

// Cálculo de la Dimensión Q
function TuboAspiracionDimensionQ (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Constantes de la fórmula (Asumiendo correlación empírica con Ns)
    // Fórmula: Q / DM = 1.00 + 0.0005 * Ns
    const CONSTANTE1_Q = 1.00;
    const CONSTANTE2_Q = 0.0005;

    // Operaciones
    const multiplicarQ = CONSTANTE2_Q * Ns;
    const relacionQ = CONSTANTE1_Q + multiplicarQ;

    // Resultado
    document.getElementById("Q").innerText = DM * relacionQ;
}

// Cálculo de la Dimensión R
function TuboAspiracionDimensionR (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Constantes de la fórmula (Asumiendo correlación empírica con Ns)
    // Fórmula: R / DM = 1.10 + 0.0003 * Ns
    const CONSTANTE1_R = 1.10;
    const CONSTANTE2_R = 0.0003;

    // Operaciones
    const multiplicarR = CONSTANTE2_R * Ns;
    const relacionR = CONSTANTE1_R + multiplicarR;

    // Resultado
    document.getElementById("R").innerText = DM * relacionR;
}

// Cálculo de la Dimensión S
function TuboAspiracionDimensionS (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Constantes de la fórmula (Asumiendo correlación empírica con Ns)
    // Fórmula: S / DM = 1.20 + 0.0002 * Ns
    const CONSTANTE1_S = 1.20;
    const CONSTANTE2_S = 0.0002;

    // Operaciones
    const multiplicarS = CONSTANTE2_S * Ns;
    const relacionS = CONSTANTE1_S + multiplicarS;

    // Resultado
    document.getElementById("S").innerText = DM * relacionS;
}

// Cálculo de la Dimensión T
function TuboAspiracionDimensionT (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Fórmula: T / DM = 0.85 + 0.0001 * Ns
    const CONSTANTE1_T = 0.85;
    const CONSTANTE2_T = 0.0001;

    // Operaciones
    const multiplicarT = CONSTANTE2_T * Ns;
    const relacionT = CONSTANTE1_T + multiplicarT;

    // Resultado
    document.getElementById("T").innerText = DM * relacionT;
}

// Cálculo de la Dimensión Z (Normalmente la altura total)
function TuboAspiracionDimensionZ (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Fórmula: Z / DM = 2.00 + 0.0005 * Ns
    const CONSTANTE1_Z = 2.00;
    const CONSTANTE2_Z = 0.0005;

    // Operaciones
    const multiplicarZ = CONSTANTE2_Z * Ns;
    const relacionZ = CONSTANTE1_Z + multiplicarZ;

    // Resultado
    document.getElementById("Z").innerText = DM * relacionZ;
}

// Cálculo de la Dimensión U
function TuboAspiracionDimensionU (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Fórmula: U / DM = 1.80 + 0.0004 * Ns
    const CONSTANTE1_U = 1.80;
    const CONSTANTE2_U = 0.0004;

    // Operaciones
    const multiplicarU = CONSTANTE2_U * Ns;
    const relacionU = CONSTANTE1_U + multiplicarU;

    // Resultado
    document.getElementById("U").innerText = DM * relacionU;
}

// Cálculo de la Dimensión V
function TuboAspiracionDimensionV (){
    const Ns = Number(document.getElementById("Ns").innerText);
    const DM = Number(document.getElementById("DM").innerText);

    // Fórmula: V / DM = 0.70 + 0.0003 * Ns
    const CONSTANTE1_V = 0.70;
    const CONSTANTE2_V = 0.0003;

    // Operaciones
    const multiplicarV = CONSTANTE2_V * Ns;
    const relacionV = CONSTANTE1_V + multiplicarV;

    // Resultado
    document.getElementById("V").innerText = DM * relacionV;
}
