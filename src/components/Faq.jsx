import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";

const questions = [
  {
    pergunta: "Para quem é este evento?",
    resposta:
      "Para mentores, palestrantes e profissionais que desejam escalar sua autoridade e faturar alto nos palcos.",
  },
  {
    pergunta: "Preciso ter experiência prévia?",
    resposta:
      "Não. A metodologia cobre desde os fundamentos da oratória até as estratégias avançadas de venda de alto ticket.",
  },
  {
    pergunta: "Por quanto tempo terei acesso?",
    resposta:
      "O acesso à gravação e aos materiais complementares será enviado por e-mail após o evento ao vivo.",
  },
];

const Faq = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 10,
        borderTop: "1px solid #222",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ color: "#FFD700", fontWeight: 900, mb: 6 }}
        >
          DÚVIDAS FREQUENTES
        </Typography>
        {questions.map((item, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "#111",
              color: "#fff",
              mb: 2,
              border: "1px solid #333",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#FFD700" }} />}
              sx={{ py: 1 }}
            >
              <Typography sx={{ fontWeight: "bold" }}>
                {item.pergunta}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ borderTop: "1px solid #222", color: "#aaa" }}
            >
              <Typography>{item.resposta}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default Faq;
