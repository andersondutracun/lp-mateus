import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const questions = [
  {
    pergunta: "O que é o Estúdio Inspire.se?",
    resposta:
      "É um ambiente estruturado para posicionamento e construção de autoridade, equipado com tecnologia de captação multicâmera e padrão elevado de áudio e imagem, ideal para quem deseja transmitir maturidade e segurança.",
  },
  {
    pergunta: "O que é o Inspire.se Club?",
    resposta:
      "É o núcleo exclusivo de membros fundadores (Plano Elite). Durante 6 meses, este grupo terá encontros mensais presenciais para networking estratégico e crescimento conectado dentro do ecossistema Inspire.se.",
  },
  {
    pergunta: "Por que existem apenas 25 vagas para o Plano Elite?",
    resposta:
      "Para garantir a qualidade das conexões e o foco no desenvolvimento de cada membro fundador. Após o preenchimento das 25 vagas, o acesso ao Plano Elite será encerrado até um novo ciclo futuro.",
  },
  {
    pergunta: "Preciso de experiência com gravação?",
    resposta:
      "Não. O Estúdio Inspire.se entrega uma estrutura técnica completa e curadoria de posicionamento, orientando sobre o cenário e enquadramento ideal para o seu nicho.",
  },
  {
    pergunta: "Como funciona o ciclo de Membro Fundador?",
    resposta:
      "O ciclo Prime Club Fundador 2026 marca o ponto de origem deste novo padrão. Os membros fundadores definem a base do movimento e garantem condições exclusivas que não estarão disponíveis em turmas posteriores.",
  },
];

const Faq = () => {
  return (
    <Box sx={{ width: "100%", py: 12, backgroundColor: "transparent" }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#C5A47E",
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              letterSpacing: 3,
            }}
          >
            Dúvidas Frequentes
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontFamily: '"IvyPresto", serif',
              fontStyle: "italic", // Identidade Inspire.se
              fontWeight: 600,
              mt: 1,
            }}
          >
            Perguntas <span style={{ color: "#C5A47E" }}>Comuns</span>
          </Typography>
        </Box>

        {questions.map((item, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              color: "#fff",
              mb: 2,
              border: "1px solid rgba(197, 164, 126, 0.1)",
              borderRadius: "0 !important", // Geométrico conforme manual
              boxShadow: "none",
              "&:before": { display: "none" },
              "&.Mui-expanded": {
                border: "1px solid #C5A47E",
                backgroundColor: "rgba(197, 164, 126, 0.03)",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#C5A47E" }} />}
              sx={{ py: 1.5 }}
            >
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 600,
                  fontSize: "1rem",
                  letterSpacing: "0.5px",
                }}
              >
                {item.pergunta}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderTop: "1px solid rgba(197, 164, 126, 0.1)",
                color: "rgba(255, 255, 255, 0.6)",
                py: 4,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                }}
              >
                {item.resposta}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default Faq;
