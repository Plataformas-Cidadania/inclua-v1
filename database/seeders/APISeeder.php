<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class APISeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // USUARIOS
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@admin',
            'password' => '12345678'
        ]);
        // DIMENSOES
        DB::table('avaliacao.dimensao')->insert([
            'numero' => 1,
            'titulo' => 'Relações interinstitucionais e instrumentos de gestão inclusiva',
            'descricao' => 'Chama atenção para o conjunto de relações institucionais envolvidas no processo de implementação, envolvendo tanto articulações entre órgãos governamentais e organizações do setor privado e da sociedade civil. O foco se volta para identificação das implicações de falhas de articulação e conflitos interinstitucionais sobre os segmentos específicos do público atendido e para a existência de compromissos institucionais e instrumentos de gestão pró-equidade.',
            'vl_baixo' => 43,
            'vl_alto' => 23
        ]);
         DB::table('avaliacao.dimensao')->insert([
             'numero' => 2,
             'titulo' => 'Participação social e representação institucional',
             'descricao' => 'Aponta para a existência e operação de mecanismos de participação social e para a representação institucional de pontos de vistas e experiências de segmentos específicos do público nos processos de implementação, seja via organizações governamentais, não-governamentais, ou por meio do envolvimento direto de pessoas e grupos historicamente em desvantagem nos processos institucionais de decisão, definição de metas, estratégias, etc.',
             'vl_baixo' => 44,
             'vl_alto' => 25
         ]);

        DB::table('avaliacao.dimensao')->insert([
            'numero' => 3,
            'titulo' => 'Comunicação, acesso à informação e mobilização',
            'descricao' => 'Coloca em questão os processos de comunicação, divulgação e acesso à informação, visando a mobilização das usuárias do programa/serviço. O foco privilegia os esforços de comunicação e disponibilização de informação relevante para segmentos historicamente em desvantagem, por meio de linguagem adequada e adaptada, reduzindo custos de aprendizado e ampliando as possibilidades de engajamento do público a ser atendido.',
            'vl_baixo' => 34,
            'vl_alto' => 20
        ]);
        DB::table('avaliacao.dimensao')->insert([
            'numero' => 4,
            'titulo' => 'Interações e a experiência do usuário',
            'descricao' => 'Chama atenção para os momentos e experiências de interação entre as usuárias e os serviços / programas. O foco aqui se dá sobre as exigências (documentação, custos de deslocamento, condutas, etc.) que são impostas sobre as usuárias para o envolvimento com a oferta pública, sobre as normas e instrumentos que medeiam a relação entre o público e os serviços, e sobre os comportamentos e as práticas das agentes públicas frente às atendidas (sensibilidade, compromisso, valores e julgamentos morais).',
            'vl_baixo' => 84,
            'vl_alto' => 50
        ]);
        DB::table('avaliacao.dimensao')->insert([
            'numero' => 5,
            'titulo' => 'Monitoramento, avaliação e retroalimentação',
            'descricao' => 'Chama atenção para os processos de monitoramento da execução e avaliação dos resultados e efeitos da política, serviço ou programa em questão. O foco é na produção e uso (retroalimentação) de informações sobre o atendimento a públicos específicos e sobre os efeitos (não-pretendidos) derivados do envolvimento com as ofertas públicas, considerando também os esforços de incorporação de pontos de vistas e experiência de grupos historicamente em desvantagem na produção e análise dos dados.',
            'vl_baixo' => 62,
            'vl_alto' => 36
        ]);

        // INDICADORES
        // Para dimensão 1
        DB::table('avaliacao.indicador')->insert([
            'numero' => 1,
            'titulo' => 'DIVISÃO DO TRABALHO, COORDENAÇÃO E CONFLITO INTERINSTITUCIONAL',
            'descricao' => 'Identifica e avalia o grau de maturidade da articulação institucional, atenção a conflitos e disputas interorganizacionais, falhas de conexão, lacunas derivadas da divisão do trabalho entre as organizações e esforços de reorganização do arranjo institucional.',
            'id_dimensao' => 1,
            'vl_baixo' => 22,
            'vl_alto' => 11,
            'consequencia' => 'Desarticulações (ou formas específicas de articulação) e disputas interinstitucionais podem repercutir em déficits de cobertura, lacunas de atenção ou repercussões negativas para o atendimento a segmentos específicos do público ou territórios atendidos'
        ]);
        DB::table('avaliacao.indicador')->insert([
            'numero' => 2,
            'titulo' => 'INSTRUMENTOS DE GESTÃO AFIRMATIVA / INCLUSIVA',
            'descricao' => 'Identifica e avalia esforços de introdução e manutenção de instrumentos afirmativos de inclusão e de mitigação das disparidades sociais existentes na população.',
            'id_dimensao' => 1,
            'vl_baixo' => 22,
            'vl_alto' => 11,
            'consequencia' => ' A ausência (ou incipiência) de instrumentos de gestão afirmativa e inclusiva contribuem para a invisibilização de desigualdades e reforço a posturas passivas frente às desigualdades sociais já existentes.'
        ]);
        // Para dimensão 2
        DB::table('avaliacao.indicador')->insert([
            'numero' => 1,
            'titulo' => 'REPRESENTAÇÃO INSTITUCIONAL',
            'descricao' => 'Identifica e avalia esforços de representação nos processos de implementação do ponto de vista de segmentos específicos via organizações governamentais ou organizações da sociedade civil, garantindo um nível adequado de interferência dos representantes na gestão do serviço/programa; assim como esforços de representação de segmentos do público na estrutura governamental (administração) e em processos institucionais centrais (planejamento, orçamento e gestão).',
            'id_dimensao' => 2,
            'vl_baixo' => 22,
            'vl_alto' => 11,
            'consequencia' => 'A ausência ou baixa representação institucional dos pontos de vista e experiências de segmentos específicos nas estruturas governamentais e processos de gestão e implementação de políticas públicas contribui para insensibilidade, invisibilização e desatenção às suas necessidades específicas.'
        ]);
        DB::table('avaliacao.indicador')->insert([
            'numero' => 2,
            'titulo' => 'PARTICIPAÇÃO SOCIAL E TERRITÓRIO',
            'descricao' => 'Identifica e avalia esforços de abertura à participação do público em geral e de incentivo à inclusão de segmentos específicos nos espaços de participação; grau de operação prática do mecanismo de participação (versus existência meramente formal) e de inserção do canal de participação na gestão do serviço / programa; grau de efetivação das demandas oriundas do canal de participação na gestão do serviço / programa; esforço de inclusão de uma perspectiva territorial.',
            'id_dimensao' => 2,
            'vl_baixo' => 23,
            'vl_alto' => 13,
            'consequencia' => 'A ausência ou escassez de possibilidades de reconhecimento, escuta e influência de segmentos e territórios específicos do público atendido nos processos de implementação reforça a insensibilidade, a invisibilização e a desatenção às suas necessidades específicas.'
        ]);

        // Para dimensão 3
        DB::table('avaliacao.indicador')->insert([
            'numero' => 1,
            'titulo' => 'COMUNICAÇÃO / DIVULGAÇÃO',
            'descricao' => 'Identifica e avalia esforços de divulgação pública das ofertas e de focalização da comunicação em públicos-alvo específicos e em situação de maior vulnerabilidade.',
            'id_dimensao' => 3,
            'vl_baixo' => 8,
            'vl_alto' => 4,
            'consequencia' => 'Dificuldade de reconhecimento das ofertas pelo público, especialmente por parte do público em situação de maior vulnerabilidade, pode prejudicar a formação de demanda e o acesso aos bens e serviços, reforçando (ao invés de mitigar) as vulnerabilidades já existentes.'
        ]);
        DB::table('avaliacao.indicador')->insert([
            'numero' => 2,
            'titulo' => 'ACESSO À INFORMAÇÃO',
            'descricao' => 'Identifica e avalia esforços de disponibilização de informação relevante em múltiplos formatos e voltadas para públicos vulneráveis ou desfavorecidos.',
            'id_dimensao' => 3,
            'vl_baixo' => 8,
            'vl_alto' => 4,
            'consequencia' => 'A seletividade no acesso à informação e imposição de maiores custos e dificuldades de obtenção de informação a segmentos desfavorecidos prejudica o acesso e usufruto dos bens e serviços prestados.'
        ]);
        DB::table('avaliacao.indicador')->insert([
            'numero' => 3,
            'titulo' => 'LINGUAGEM ADEQUADA E ADAPTADA',
            'descricao' => 'Identifica e avalia esforços de simplificação, acessibilidade e adaptação da linguagem, além de atenção contínua à simplificação da linguagem.',
            'id_dimensao' => 3,
            'vl_baixo' => 20,
            'vl_alto' => 11,
            'consequencia' => 'A dificuldade de compreensão das informações fornecidas ao público prejudica o acesso, o engajamento e o usufruto das ofertas por parte de segmentos específicos, especialmente, aqueles estruturalmente desfavorecidos.'
        ]);

                // Para dimensão 4
                DB::table('avaliacao.indicador')->insert([
                    'numero' => 1,
                    'titulo' => 'EXIGÊNCIAS SOBRE OS USUÁRIOS',
                    'descricao' => 'Identifica e avalia esforços de identificação de exigências excessivas, desnecessárias ou imprevistas impostas pela oferta pública sobre o cidadão, em relação à informação e documentação, deslocamento, ônus financeiro, e necessidade de envolvimento de terceiros, seja para o acesso ou manutenção do status de beneficiário.',
                    'id_dimensao' => 4,
                    'vl_baixo' => 37,
                    'vl_alto' => 21,
                    'consequencia' => 'Um elevado nível de exigências e imposição de custos (i.e. informação, tempo e dinheiro) podem levar à exclusão de cidadãos em situação de vulnerabilidade.'
                ]);
                DB::table('avaliacao.indicador')->insert([
                    'numero' => 2,
                    'titulo' => 'NORMAS E INSTRUMENTOS QUE REGULAM A RELAÇÃO COM OS PÚBLICOS',
                    'descricao' => 'Identifica e avalia esforços de reflexão e revisão de atos normativos e outros instrumentos em relação a suas formas (potencialmente problemáticas) de definição e tratamento dos públicos, classificação identitária ou abordagens a seus modos de vida.',
                    'id_dimensao' => 4,
                    'vl_baixo' => 19,
                    'vl_alto' => 10,
                    'consequencia' => 'Instrumentos insensíveis à especificidade dos públicos podem provocar violência simbólica, interiorização de leituras inferiorizantes e invisibilização de públicos, territórios, culturas e modos de vida.'
                ]);
                DB::table('avaliacao.indicador')->insert([
                    'numero' => 3,
                    'titulo' => 'COMPORTAMENTOS E PRÁTICAS DOS AGENTES PÚBLICOS',
                    'descricao' => 'Identifica e avalia o grau de sensibilidade, aceitação, formação e compromisso dos agentes de implementação local com objetivos de inclusão e equidade; esforços de reconhecimento e explicitação dos sistemas de crenças e valores dos agentes locais, das suas práticas informais e do processamento de divergência de entendimento; além do grau de atenção aos efeitos simbólicos da interação entre usuários e agentes locais.',
                    'id_dimensao' => 4,
                    'vl_baixo' => 30,
                    'vl_alto' => 17,
                    'consequencia' => 'O desconhecimento e opacidade dos critérios, comportamentos e práticas informais adotados por agentes locais podem inibir ações voltadas para a efetivação de prescrições formais envolvendo a inclusão e a atenção diferenciada a segmentos específicos do público atendido.'
                ]);


                // PARA DIMENSÂO 5
                DB::table('avaliacao.indicador')->insert([
                    'numero' => 1,
                    'titulo' => 'SISTEMAS DE MONITORAMENTO E ACOMPANHAMENTO',
                    'descricao' => 'Identifica e avalia esforços gerais de monitoramento da implementação e esforços específicos de identificação e compreensão da diversidade de segmentos dentro do público atendido, de alinhamento das ferramentas de monitoramento com as características dos públicos e de acompanhamento dos casos limiares (ditos “não normais”); além disso, procura identificar se há esforços no sentido de utilização dos dados de monitoramento em análises de riscos de desatenção.',
                    'id_dimensao' => 5,
                    'vl_baixo' => 22,
                    'vl_alto' => 12,
                    'consequencia' => 'A ausência de monitoramento, com foco explícito na experiência de segmentos específicos, pode contribuir para a invisibilização das experiências desses grupos, ocultando possíveis situações de exclusão e desatenção.'
                ]);
                DB::table('avaliacao.indicador')->insert([
                    'numero' => 2,
                    'titulo' => 'AVALIAÇÃO DE EFEITOS NÃO-PRETENDIDOS SOBRE OS USUÁRIOS',
                    'descricao' => 'Identifica e avalia esforços de avaliação de efeitos negativos associados à estigmatização (auto imagem e hetero imagem), à exposição e intrusão na privacidade dos atendidos, aos custos psicológicos e emocionais de envolvimento com o programa, assim como outros custos não pretendidos e ações no sentido de processar e mitigar esses efeitos.',
                    'id_dimensao' => 5,
                    'vl_baixo' => 22,
                    'vl_alto' => 12,
                    'consequencia' => 'A ausência de identificação e processamento dos possíveis efeitos negativos derivados do envolvimento com o programa pode contribuir para a invisibilização e inação em relação a efeitos não-pretendidos, prejudicando a efetiva inclusão de grupos desfavorecidos.'
                ]);
                DB::table('avaliacao.indicador')->insert([
                    'numero' => 3,
                    'titulo' => 'ENVOLVIMENTO DOS DESTINATÁRIOS',
                    'descricao' => 'Identifica e avalia esforços de inclusão de segmentos específicos, em especial aqueles tradicionalmente desfavorecidos, no monitoramento e avaliação do programa / serviço, abertura a críticas e reclamações, grau de incorporação da perspectiva dos usuários sobre a qualidade do atendimento e sobre a revisão de procedimentos.',
                    'id_dimensao' => 5,
                    'vl_baixo' => 19,
                    'vl_alto' => 10,
                    'consequencia' => 'A ausência de envolvimento de usuários, especialmente de segmentos específicos e desfavorecidos do público atendido, nos esforços de monitoramento e avaliação prejudicam a compreensão de suas experiências com o programa/serviço e contribuem para a invisbilização e manutenção de formas de desatenção e exclusão.'
                ]);

        // PERGUNTAS

       // PARA INDICADOR 1
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'Caso o processo de implementação dessa oferta pública envolva mais de uma organização (ou múltiplas unidades de uma organização) responsável por etapas diferentes da produção do bem ou serviço, existem espaços e mecanismos para promover a coordenação e a articulação das ações entre essas organizações? [Por exemplo: reuniões periódicas, comitês gestores, instâncias de mediação, etc.]',
            'legenda' => 'Marque uma opção abaixo',
            'vl_minimo' => 0,
            'vl_maximo' => 1,
            'tipo'=> 1,
            'nao_se_aplica'=> true,
            'inverter' => false,
            'id_indicador' => 1,
            'vl_subPergunta' => 1
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => '1',
            'descricao' => 'Esses espaços e mecanismos de articulação existentes são adequados e efetivos. Como você avalia essa afirmação? Marque uma opção abaixo.',
             'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 1,
            'id_perguntaPai' => 1,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'b',
            'descricao' => 'A atual divisão do trabalho e papéis entre as organizações (ou unidades da mesma organização) que atuam na implementação é adequada para dar cobertura a todos públicos e/ou territórios alvo da oferta pública. Isto é, seria possível dizer que nenhum segmento do público/território-alvo ficou sabidamente desatendido. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 1,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'c',
            'descricao' => 'Existem espaços adequados para a gestão, processamento e superação de conflitos, disputas de jurisdição ou desentendimentos entre as organizações envolvidas, evitando prejuízos à boa comunicação e ao trabalho conjunto. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 1,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'd',
            'descricao' => 'Regularmente, são feitos esforços de identificação de falhas ou dificuldades de articulação (conflito, competição, disputas de jurisdição ou desentendimentos entre as organizações) e de como elas impactam a cobertura do programa e seu acesso por parte de segmentos específicos do público ou território atendido. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 1,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => '.',
            'descricao' => 'Considerando a atual divisão do trabalho e papéis entre as organizações (ou unidades da mesma organização) que atuam na implementação da oferta pública, como você avalia a probabilidade das (des)articulações observadas repercutirem em déficits de cobertura, lacunas de atenção ou repercussões negativas para o atendimento a segmentos específicos do público ou do territórios?',
            'legenda' => ' Dê uma nota de zero a dez:',
            'vl_minimo' => 1,
            'vl_maximo' => 10,
            'tipo'=> 3,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 1,
        ]);

        // PERGUNTAS PARA INDICADOR 2
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'Existem metas de cobertura/atendimento para grupos populacionais específicos (por exemplo, percentuais de atendimentos por grupos segundo raça/cor, identidade de gênero, etnia, território, etc.)? ',
            'legenda' => 'Marque uma opção abaixo',
            'vl_minimo' => 0,
            'vl_maximo' => 5,
            'tipo'=> 1,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 2,
        ]);

        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'b',
            'descricao' => 'Existem normas e protocolos especificamente direcionados ao enfrentamento do racismo institucional?',
            'legenda' => 'Marque uma opção abaixo',
            'vl_minimo' => 0,
            'vl_maximo' => 5,
            'tipo'=> 1,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 2,
        ]);

        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'c',
            'descricao' => 'Existem unidades ou mecanismos institucionais dedicados ao enfrentamento de disparidades de gênero e do racismo institucional? ',
            'legenda' => 'Marque uma opção abaixo',
            'vl_minimo' => 0,
            'vl_maximo' => 5,
            'tipo'=> 1,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 2,
        ]);

        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'd',
            'descricao' => 'A promoção de equidade de raça e gênero está inserida na dimensão estratégica e nos ciclos de planejamento e orçamento. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 2,
        ]);

        DB::table('avaliacao.pergunta')->insert([
            'letra' => '.',
            'descricao' => 'De forma geral, como você avalia os compromissos institucionais e esforços existentes no sentido da introdução e manutenção de instrumentos afirmativos de inclusão e de mitigação das disparidades sociais já existentes? Dê uma nota de zero a dez em relação ao nível de compromisso institucional.',
            'legenda' => 'Sendo 1: Baixissimo compromisso e 10: Altíssimo compromisso',
            'vl_minimo' => 1,
            'vl_maximo' => 10,
            'tipo'=> 3,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 2,
        ]);


        // PERGUNTAS PARA INDICADOR 3 ( Dimensão 2 indicador 1)
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'Organizações governamentais ou não-governamentais (sociedade civil) associadas às agendas de segmentos específicos do público atendido têm papel formal ou meios de influência no processo de execução da oferta público sob foco. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 3,
        ]);

        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'b',
            'descricao' => 'Essas organizações (tanto as governamentais quanto as não-governamentais), associadas às agendas de segmentos específicos, têm condições adequadas de participação e interferência nos processos de execução e são ouvidas tempestivamente na coordenação e gestão da oferta pública. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 3,
        ]);

        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'c',
            'descricao' => 'Existem membros de segmentos específicos do público atendido (ex.: mulheres negras, indígenas, pessoas com deficiência, etc.) em posto de chefia e coordenação das ações governamentais no âmbito da execução dessa oferta pública? ',
            'legenda' => 'Marque uma opção abaixo',
            'vl_minimo' => 0,
            'vl_maximo' => 5,
            'tipo'=> 1,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 3,
        ]);

        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'd',
            'descricao' => 'Em sua avaliação geral, a proporção de membros de segmentos específicos do público atendido (ex.: mulheres negras, indígenas, pessoas com deficiência, etc.) na equipe envolvida com a prestação dos serviços na linha de frente é semelhante à proporção desses grupos na população atendida? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Nada Semelhante e 5: Muito Semelhante',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 3,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => '.',
            'descricao' => 'CConsiderando a relevância de se levar em consideração os pontos de vistas de segmentos específicos do público atendido no processo de implementação, como você avalia a representação das pautas e interesses desses grupos via organizações governamentais ou da sociedade civil? Dê uma nota de zero a dez em relação ao nível de representação institucional de segmentos específicos do público atendido.',
            'legenda' => 'Sendo 1: Baixissima representação e 10: Altíssima representação',
            'vl_minimo' => 1,
            'vl_maximo' => 10,
            'tipo'=> 3,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 3,
        ]);

        // PERGUNTAS PARA INDICADOR 4 ( Dimensão 2 indicador 2)
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'Existem mecanismos formais que garantam a adequada participação dos usuários na gestão, tomada de decisão e controle da oferta pública sob foco. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 4,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'b',
            'descricao' => 'Existem incentivos ou facilitação (ex.: acesso, simplicidade, cota, apoio logístico ou financeiro, etc.) para o envolvimento e representação de usuários de segmentos específicos nesses espaços de participação social. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 4,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'c',
            'descricao' => 'Os órgãos responsáveis pela condução da oferta pública sob foco têm sensibilidade e compromisso com a escuta desses mecanismos de participação social. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 4,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'd',
            'descricao' => 'Há esforço sistemático de acompanhamento do atendimento das demandas oriundas dos canais de participação e consulta à população. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 4,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => '.',
            'descricao' => 'Considerando a relevância do envolvimento direto de segmentos específicos do público atendido, como você avalia a influência dos canais de participação social existentes nas decisões sobre a gestão da oferta pública? Dê uma nota de zero a dez em relação ao nível de influência dos canais de participação social.',
            'legenda' => 'Sendo 1: Baixissima influência e 10: Altíssima influência',
            'vl_minimo' => 1,
            'vl_maximo' => 10,
            'tipo'=> 3,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 4,
        ]);

        // PERGUNTAS PARA INDICADOR 5 ( Dimensão 3 indicador 1)
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'A estratégia geral de comunicação e divulgação das ofertas é adequada para atingir populações em situação de vulnerabilidade. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 5,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'b',
            'descricao' => 'Existem estratégias efetivas de comunicação, divulgação, ou campanhas focalizadas em públicos específicos, em especial, aqueles tradicionalmente desfavorecidos. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 5,
        ]);
        // PERGUNTAS PARA INDICADOR 6 ( Dimensão 3 indicador 2)
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'Considerando os distintos modos por meio dos quais informações relevantes sobre as ofertas podem ser acessadas (ex.: site internet; WhatsApp, Twitter e outros aplicativos; central telefone; balcão/agência; grande imprensa; inserção em outras mídias; material de divulgação; manual; FAQ ; campanhas; parcerias com outras organizações; outros), pode-se dizer que a amplitude de modos de disponibilização de informação é adequada ao contexto da oferta e seu público. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 6,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'b',
            'descricao' => 'Existem estratégias eficazes de disponibilização de informação relevante focalizadas em públicos vulneráveis ou desfavorecidos (ex.: peças/instrumentos específicos, parcerias com ONGs, equipe de abordagem especializada, etc...). Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 6,
        ]);

        // PERGUNTAS PARA INDICADOR 7 ( Dimensão 3 indicador 3)
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'As informações relativas a critérios de elegibilidade, natureza dos benefícios e procedimentos para obtenção de acesso estão expressas em linguagem simples e acessível. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 7,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'b',
            'descricao' => 'Os principais documentos voltados para os beneficiários/usuários – como material de divulgação, formulários de cadastramento, plataformas online, cartas/e-mails e notificações, etc. – foram submetidos a testes, diagnósticos ou avaliações de linguagem simples. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 7,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'c',
            'descricao' => 'São feitos esforços de adaptação da linguagem e mobilização de formas de comunicação diferenciadas para atendimento a grupos específicos ou segmentos vulneráveis. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 7,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => '.',
            'descricao' => 'De forma geral, como você avalia a contribuição das estratégias de comunicação, de disponibilização de informações e a linguagem adotadas para facilitar o acesso e a inclusão de segmentos específicos do público atendido (em especial aqueles tradicionalmente vulnerabilizados)? Dê uma nota de zero a dez em relação ao nível de adaptação e adequação da comunicação para esses segmentos.',
            'legenda' => 'Sendo 1: Baixíssima adaptação e 10: Altíssima adaptação',
            'vl_minimo' => 1,
            'vl_maximo' => 10,
            'tipo'=> 3,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 7,
        ]);
        // PERGUNTAS PARA INDICADOR 8 ( Dimensão 4 indicador 1)
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'Para ter acesso ao bem ou serviço público oferecido, é uma pré-condição o fornecimento de um volume extenso de documentos e outros tipos de informações que podem ser difíceis ou custosos para o demandante fornecer. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => true,
            'id_indicador' => 8,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'b',
            'descricao' => 'Considerando as diferentes possibilidades de entrega/coleta das informações requisitadas (exemplo: online, coleta em domicílio, coleta via intermediários, entrega no balcão, via correio, etc.), pode-se dizer que elas são muito bem distribuídas no território e acessíveis, facilitando o contato com os usuários. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 8,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'c',
            'descricao' => 'Existem estratégias eficazes para alcançar grupos espacialmente isolados ou distantes dos pontos de atenção oferecidos pela oferta pública (exemplo: excursões periódicas, fornecimento de vale-transporte, parcerias com ONGS, mutirões e ações coletivas, etc.) Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 8,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'd',
            'descricao' => 'Os pontos de atendimento presencial disponibilizam turnos alternativos para atendimento dos diferentes segmentos da população em função de suas necessidades (exemplo: contraturnos, 24h, atendimento aos finais de semana, etc.) Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 8,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'e',
            'descricao' => 'Caso haja cobrança de taxas ou de algum tipo de pagamento pelo bem ou serviço em questão, há possibilidade de isenção desses encargos para segmentos específicos do público? ',
            'legenda' => 'Marque uma opção abaixo',
            'vl_minimo' => 0,
            'vl_maximo' => 5,
            'tipo'=> 1,
            'nao_se_aplica'=> true,
            'inverter' => false,
            'id_indicador' => 8,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'f',
            'descricao' => 'O envolvimento de algum tipo de intermediário (exemplo: advogado, cartório, despachante, acompanhante, associação, etc.) é necessário ou muito comum para o acesso ou manutenção do serviço ou benefício. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => true,
            'id_indicador' => 8,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'g',
            'descricao' => 'Existem normas ou protocolos que definem claramente o que pode ser exigido do cidadão, deixando pouca margem para arbitrariedade na imposição de exigências imprevistas (exemplo: demanda de documentos e informações adicionais, contraprestação de serviços e doações, ameaças de exposição/denúncia, exigências de condutas e comportamentos "adequados", etc.) Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 8,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'h',
            'descricao' => 'Caso exista exigência de regularização, atualização periódica ou recadastramento para manutenção do acesso ao bem ou serviço público em questão, os custos e ônus impostos ao cidadão nesse processo são elevados. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 0,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> true,
            'inverter' => false,
            'id_indicador' => 8,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => '.',
            'descricao' => 'Caso exista exigência de regularização, atualização periódica ou recadastramento para manutenção do acesso ao bem ou serviço público em questão, os custos e ônus impostos ao cidadão nesse processo são elevados. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Baixíssima exigência/custo e 10: Altíssima exigência/custo',
            'vl_minimo' => 1,
            'vl_maximo' => 10,
            'tipo'=> 3,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 8,
        ]);

        // PERGUNTAS PARA INDICADOR 9 ( Dimensão 4 indicador 2)
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'Atos normativos que organizam a implementação da política/serviço (decretos, portarias, resoluções, instruções normativas, etc.) comumente contém definições e formas de classificação dos públicos atendidos. No caso da oferta pública sob avaliação, pode-se dizer que as definições existentes incorrem em reducionismos, reprodução de estereótipos, preconceitos e visões inferiorizantes (ainda que social e culturalmente difundidos) sobre segmentos específicos do público atendido. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => true,
            'id_indicador' => 9,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'b',
            'descricao' => 'Existem processos regulares de discussão e avaliação desses atos normativos e suas definições (e classificações) envolvendo atores externos ao órgão responsável pela implementação. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 9,
        ]);

        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'c',
            'descricao' => 'Os formulários, sistemas, cadastros, etc. são regularmente submetidos a testes e avaliações em relação a sua adequação às situações vividas por segmentos específicos do público atendido, visando evitar a invisibilização de algum grupo, território, cultura, ou tema/questão. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 9,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => '.',
            'descricao' => 'Considerando os vários instrumentos que organizam a relação do serviço com o cidadão – atos normativos, formulários, sistemas, etc. – como você avalia a sensibilidade e adaptação deles às especificidades dos diferentes públicos atendidos? Dê uma nota de zero a dez em relação ao nível de adaptação e sensibilidade dos instrumentos.',
            'legenda' => 'Sendo 1: Baixíssima sensibilidade e e 10: Altíssima sensibilidade',
            'vl_minimo' => 1,
            'vl_maximo' => 10,
            'tipo'=> 3,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 9,
        ]);
        // PERGUNTAS PARA INDICADOR 10 ( Dimensão 4 indicador 3)
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'Nos processos de recrutamento para esse programa/serviço, buscou-se selecionar pessoas que tenham experiência (pessoal ou profissional) relativa à realidade vivida por segmentos específicos do público atendido. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 10,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'b',
            'descricao' => 'São feitos esforços regulares de diagnóstico e verificação do nível de aceitação, concordância ou alinhamento dos trabalhadores na ponta com as prescrições formais da política pública relativas à inclusão e atenção a segmentos específicos do público. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 10,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'c',
            'descricao' => 'Existem estratégias ou procedimentos para lidar com a resistência dos trabalhadores em relação aos públicos atendidos ou para lidar com as divergências internas em colocar em prática as prescrições formais voltadas para inclusão e atenção a segmentos específicos do público (exemplo: produção de materiais de orientação, protocolos, cursos de capacitação, discussão de casos e trocas de experiência, processo administrativo disciplinar, etc.) Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 10,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'd',
            'descricao' => 'As equipes recebem treinamentos periódicos e estão preparadas para abordagem singularizada e diferenciada dos públicos. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 10,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'e',
            'descricao' => 'Reconhecendo que preconceitos, valores e visões de mundo influenciam as decisões cotidianas dos agentes de implementação local, são feitos esforços no sentido de compreender os sistemas de classificação e categorização dos usuários informalmente construídos e compartilhados por estes agentes de linha de frente (ex.: "merecedores", "pacientes fáceis ou difíceis", “aderentes ou resistentes”, etc.), por meio de contratação de pesquisas, questionários e entrevistas internas, usuário oculto, simulações de casos grupos focais, etc. Como você avalia essa afirmação? Marque uma opção abaixo',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 10,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'f',
            'descricao' => 'Existem procedimentos ou mecanismos adequados para a discussão e reflexão sobre decisões e condutas dos agentes de implementação em casos concretos e específicos (exemplo: supervisão clínica, discussão de casos em equipe, avaliação externa de casos via sorteio, difusão de boas práticas, trocas de experiências, auditorias a partir de denúncias dos usuários, etc.) Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 10,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => '.',
            'descricao' => 'Considerando os trabalhadores envolvidos na execução dos serviços na linha de frente, como você avalia os mecanismos existentes para lidar com insensibilidades, resistências, divergências de entendimento e falta de compromisso com objetivos de inclusão e equidade? Dê uma nota de zero a dez em relação à adequação dos mecanismos existentes frente ao desafio de se promover a adesão dos agentes de implementação local com objetivos de inclusão e equidade.',
            'legenda' => 'Sendo 1: Baixíssima adequação e 10: Altíssima adequação',
            'vl_minimo' => 1,
            'vl_maximo' => 10,
            'tipo'=> 3,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 10,
        ]);
        // PERGUNTAS PARA INDICADOR 11 ( Dimensão 5 indicador 1)
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'Há um sistema de monitoramento e acompanhamento da execução do serviço?',
            'legenda' => 'Marque uma opção abaixo.',
            'vl_minimo' => 0,
            'vl_maximo' => 1,
            'tipo'=> 1,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'vl_subPergunta' => 1,
            'id_indicador' => 11,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => '1',
            'descricao' => 'Os indicadores desse sistema de monitoramento são sensíveis às situações vividas por segmentos específicos do público atendido. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 11,
            'id_perguntaPai'=> 50
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'b',
            'descricao' => 'Há levantamentos regulares de informação sobre características da população atendida segundo raça/cor, sexo/identidade de gênero, etnia, território, etc. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 11,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'c',
            'descricao' => 'Existem esforços de identificação de casos e situações (indivíduos, grupos ou territórios) que não encontram “encaixe” – i.e. são desviantes, atípicos ou anormais – ou para os quais não há atenção por nenhuma das vias e canais disponibilizados. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 11,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'd',
            'descricao' => 'Existem processos contínuos de exploração dos riscos conhecidos e de novos possíveis riscos de exclusão e desatenção a segmentos específicos do público atendido (por exemplo, cruzamento de bases de dados, abertura a fontes alternativas de informação e a inputs e questionamentos externos, participação social para revisão de consensos e visões de mundo já estabelecidos, etc.) Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 11,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => '.',
            'descricao' => 'Considerando que a ausência de monitoramento, com foco explícito na experiência de segmentos específicos, pode contribuir para a invisibilização das experiências desses grupos, ocultando possíveis situações de exclusão e desatenção, como você avalia os esforços atuais de monitoramento da execução dos serviços? Dê uma nota de zero a dez em relação ao nível de aderência dos processos de monitoramento às experiências de segmentos específicos do público.',
            'legenda' => 'Sendo 1: Baixíssima aderência e 10: Altíssima aderência',
            'vl_minimo' => 1,
            'vl_maximo' => 10,
            'tipo'=> 3,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 11,
        ]);
        // PERGUNTAS PARA INDICADOR 12 ( Dimensão 5 indicador 2)
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'Existem esforços de avaliação de possíveis efeitos negativos que o envolvimento com a oferta pública sob foco pode provocar na autoimagem do beneficiário/usuário – i.e. na forma como internalizam as categorias administrativas (formais e informais) e se o status de beneficiário acarreta uma leitura inferiorizada de si – por meio, por exemplo, de contratação de pesquisas, acompanhamento qualitativo de usuários, avaliação de egressos, grupos focais, etc. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 12,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'b',
            'descricao' => 'Existem esforços de avaliação sobre os possíveis efeitos negativos que o envolvimento com a oferta pública sob foco pode provocar na imagem que outros constroem sobre o beneficiário/usuário (heteroimagem) – i.e. na forma como são vistos pela sua comunidade local (família, amigos, vizinhos, etc.) acarretando estigmatização, vergonha ou assédio – por meio, por exemplo, de contratação de pesquisas, acompanhamento qualitativo de usuários, avaliação de egressos, grupos focais, etc.) Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 12,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'c',
            'descricao' => 'Quando efeitos negativos são identificados na auto e/ou hetero imagem dos beneficiários/usuários, existem procedimentos ou práticas previstas e voltadas para mitigação desses danos. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 12,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'd',
            'descricao' => 'Caso a participação no programa/serviço possa acarretar a intrusão na intimidade, exposição indevida e supervisão administrativa da vida privada, existem iniciativas voltadas para mitigar os efeitos da devassa da vida íntima do beneficiário/usuário. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> true,
            'inverter' => false,
            'id_indicador' => 12,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => '.',
            'descricao' => 'De forma geral, como você avalia os atuais esforços de avaliação de possíveis efeitos negativos (e não intencionais) associados ao envolvimento dos usuários/demandantes com o programa? Dê uma nota de zero a dez em relação a você avalia as ações existentes no sentido de captar, processar e mitigar esses efeitos.',
            'legenda' => 'Sendo 1: Baixíssimo esforço de avaliação e 10 : Altíssimo esforço de avaliação',
            'vl_minimo' => 1,
            'vl_maximo' => 10,
            'tipo'=> 3,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 12,
        ]);
        // PERGUNTAS PARA INDICADOR 13 ( Dimensão 5 indicador 3)
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'Membros ou representantes de segmentos específicos e grupos tradicionalmente desfavorecidos dentre o público atendido participam dos processos institucionais de monitoramento e avaliação. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 13,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'b',
            'descricao' => 'Existem ouvidorias, SACs ou outros canais em adequada operação para envio de denúncia, reclamação ou recurso. Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 13,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'c',
            'descricao' => 'É feita a avaliação de satisfação com o público atendido? ',
            'legenda' => 'Marque uma opção abaixo.',
            'vl_minimo' => 0,
            'vl_maximo' => 1,
            'tipo'=> 1,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'vl_subPergunta'=> 1,
            'id_indicador' => 13,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => '1',
            'descricao' => 'Os resultados da avaliação de satisfação são costumeiramente analisados em termos de segmentos específicos do público atendido (perfil racial, identidade de gênero, território, etc.) Como você avalia essa afirmação? Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discordo totalmente e 5: Concordo totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_perguntaPai' => 63,
            'id_indicador' => 13,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => '.',
            'descricao' => 'Considerando que a ausência de envolvimento de usuários, especialmente de segmentos específicos e desfavorecidos do público atendido, nos esforços de monitoramento e avaliação prejudica a compreensão de suas experiências com a oferta pública sob foco, como você avalia os atuais esforços de inclusão, abertura a críticas e grau de incorporação da perspectiva dos usuários sobre a qualidade do atendimento? Dê uma nota de zero a dez em relação ao nível de incorporação dos usuários nos processos de avaliação.',
            'legenda' => 'Sendo 1: Baixíssima incorporação e 10: Altíssima incorporação',
            'vl_minimo' => 1,
            'vl_maximo' => 10,
            'tipo'=> 3,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 13,
        ]);

        /*
         * DADOS APENAS PARA TESTES.
         * Os dados de recursos reais serão inseridos via ETL
                // AUTOR
                DB::table('avaliacao.autor')->insert([
                    'nome' => 'Vienna City',
                ]);
                DB::table('avaliacao.autor')->insert([
                    'nome' => 'OPAS',
                ]);
                // FORMATO_RECURSO
                DB::table('avaliacao.formato_recurso')->insert([
                    'nome' => 'pdf',
                ]);
                DB::table('avaliacao.formato_recurso')->insert([
                    'nome' => 'img',
                ]);
                DB::table('avaliacao.formato_recurso')->insert([
                    'nome' => 'Video',
                ]);
                DB::table('avaliacao.formato_recurso')->insert([
                    'nome' => 'Site',
                ]);
                DB::table('avaliacao.formato_recurso')->insert([
                    'nome' => 'Curso',
                ]);
                DB::table('avaliacao.formato_recurso')->insert([
                    'nome' => 'Pasta compartilhada',
                ]);
                DB::table('avaliacao.formato_recurso')->insert([
                    'nome' => 'Reportagem',
                ]);
                DB::table('avaliacao.formato_recurso')->insert([
                    'nome' => 'Diversos',
                ]);
                DB::table('avaliacao.formato_recurso')->insert([
                    'nome' => 'Audio',
                ]);
                DB::table('avaliacao.formato_recurso')->insert([
                    'nome' => 'E-book',
                ]);
                DB::table('avaliacao.formato_recurso')->insert([
                    'nome' => 'Sem informação',
                ]);
                // TIPO_RECURSO
                DB::table('avaliacao.tipo_recurso')->insert([
                    'nome' => 'Artigo',
                ]);
                DB::table('avaliacao.tipo_recurso')->insert([
                    'nome' => 'Blog',
                ]);
                DB::table('avaliacao.tipo_recurso')->insert([
                    'nome' => 'Diagnóstico',
                ]);
                DB::table('avaliacao.tipo_recurso')->insert([
                    'nome' => 'Indicador',
                ]);
                DB::table('avaliacao.tipo_recurso')->insert([
                    'nome' => 'Engaging Institutions',
                ]);
                DB::table('avaliacao.tipo_recurso')->insert([
                    'nome' => 'Manual',
                ]);
                DB::table('avaliacao.tipo_recurso')->insert([
                    'nome' => 'Estratégia/Roadmap',
                ]);
                DB::table('avaliacao.tipo_recurso')->insert([
                    'nome' => 'Curso',
                ]);
                DB::table('avaliacao.tipo_recurso')->insert([
                    'nome' => 'Sem informação',
                ]);
                DB::table('avaliacao.tipo_recurso')->insert([
                    'nome' => ' ',
                ]);
                DB::table('avaliacao.tipo_recurso')->insert([
                    'nome' => '',
                ]);
                DB::table('avaliacao.tipo_recurso')->insert([
                    'nome' => '',
                ]);

                //CATEGORIA
                DB::table('avaliacao.categoria')->insert([
                    'nome' => 'gênero',
                ]);
                DB::table('avaliacao.categoria')->insert([
                    'nome' => 'linguagem simples',
                ]);

                //RECURSO
                DB::table('avaliacao.recurso')->insert([
                    'nome' => 'GENDER MAINSTREAMING MADE EASY: Practical advice for more gender equality in the Vienna City Administration',
                    'ultimo_acesso' => Carbon::parse('2000-01-01'),
                    'esfera' => 'Municipal',
                    'id_tipo_recurso' => 1,
                    'id_formato' => 1,
                    'status' => 1
                ]);
                DB::table('avaliacao.recurso')->insert([
                    'nome' => 'Guia para Implementação das Prioridades Transversais na OPAS/OMS do Brasil: direitos humanos, equidade, gênero e etnicidade e raça',
                    'ultimo_acesso' => Carbon::parse('2000-01-01'),
                    'esfera' => 'Brasil',
                    'id_tipo_recurso' => 1,
                    'id_formato' => 2,
                    'status' => 1
                ]);
                DB::table('avaliacao.recurso')->insert([
                    'nome' => 'Equidade de gênero em saúde',
                    'ultimo_acesso' => Carbon::parse('2000-01-01'),
                    'esfera' => 'Brasil',
                    'id_tipo_recurso' => 2,
                    'id_formato' => 1,
                    'status' => 1
                ]);
                // CATEGORIZACAO
                DB::table('avaliacao.categorizacao')->insert([
                    'id_categoria' => 1,
                    'id_recurso' => 1,
                ]);
                DB::table('avaliacao.categorizacao')->insert([
                    'id_categoria' => 2,
                    'id_recurso' => 1,
                ]);
                DB::table('avaliacao.categorizacao')->insert([
                    'id_categoria' => 1,
                    'id_recurso' => 2,
                ]);
                DB::table('avaliacao.categorizacao')->insert([
                    'id_categoria' => 2,
                    'id_recurso' => 3,
                ]);

                // LINK
                DB::table('avaliacao.link')->insert([
                    'uri' => 'https://www.wien.gv.at/english/administration/gendermainstreaming/principles/manual.html	',
                    'idioma' => 'Inglês/Alemão',
                    'id_recurso' => 1,
                ]);
                DB::table('avaliacao.link')->insert([
                    'uri' => 'https://www.oecd.org/gov/toolkit-for-mainstreaming-and-implementing-gender-equality.pdf	',
                    'idioma' => 'Português',
                    'id_recurso' => 2,
                ]);
                DB::table('avaliacao.link')->insert([
                    'uri' => 'https://www.youtube.com/playlist?list=PLHHnQGKBbuiz67NzUaFFwTu5Rj8airwXv	',
                    'idioma' => 'Português',
                    'id_recurso' => 3,
                ]);
                // AUTORIA
                DB::table('avaliacao.autoria')->insert([
                    'id_autor' => 1,
                    'id_recurso' => 1,
                ]);
                DB::table('avaliacao.autoria')->insert([
                    'id_autor' => 1,
                    'id_recurso' => 2,
                ]);
                DB::table('avaliacao.autoria')->insert([
                    'id_autor' => 2,
                    'id_recurso' => 3,
                ]);
                // INDICACAO
                DB::table('avaliacao.indicacao')->insert([
                    'id_indicador' => 1,
                    'id_recurso' => 1,
                ]);
                DB::table('avaliacao.indicacao')->insert([
                    'id_indicador' => 1,
                    'id_recurso' => 2,
                ]);
                DB::table('avaliacao.indicacao')->insert([
                    'id_indicador' => 1,
                    'id_recurso' => 3,
                ]);
                DB::table('avaliacao.indicacao')->insert([
                    'id_indicador' => 2,
                    'id_recurso' => 2,
                ]);
                DB::table('avaliacao.indicacao')->insert([
                    'id_indicador' => 2,
                    'id_recurso' => 3,
                ]);

                */
    }
}

