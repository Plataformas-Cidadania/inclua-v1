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
        /*
        DB::table('avaliacao.dimensao')->insert([
            'numero' => 3,
            'titulo' => 'Comunicação, acesso à informação e mobilização',
            'descricao' => 'Coloca em questão os processos de comunicação, divulgação e acesso à informação, visando a mobilização das usuárias do programa/serviço. O foco privilegia os esforços de comunicação e disponibilização de informação relevante para segmentos historicamente em desvantagem, por meio de linguagem adequada e adaptada, reduzindo custos de aprendizado e ampliando as possibilidades de engajamento do público a ser atendido.',
            'vl_baixo' => 34,
            'vl_alto' => 20
        ]);
        DB::table('avaliacao.dimensao')->insert([
            'numero' => 4,
            'titulo' => 'Coloca em questão os processos de comunicação, divulgação e acesso à informação, visando a mobilização das usuárias do programa/serviço. O foco privilegia os esforços de comunicação e disponibilização de informação relevante para segmentos historicamente em desvantagem, por meio de linguagem adequada e adaptada, reduzindo custos de aprendizado e ampliando as possibilidades de engajamento do público a ser atendido.',
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
        ]);*/

        // INDICADORES
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
        ]); /*
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
        ]);*/

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
            'letra' => 'a1',
            'descricao' => 'Esses espaços e mecanismos de articulação existentes são adequados e efetivos. Como você avalia essa afirmação? Marque uma opção abaixo.',
             'legenda' => 'Sendo 1: Discorda totalmente e 5: Concorda Totalmente',
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
            'legenda' => 'Sendo 1: Discorda totalmente e 5: Concorda Totalmente',
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
            'legenda' => 'Sendo 1: Discorda totalmente e 5: Concorda Totalmente',
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
            'legenda' => 'Sendo 1: Discorda totalmente e 5: Concorda Totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 1,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'x',
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
            'legenda' => 'Sendo 1: Discorda totalmente e 5: Concorda Totalmente',
            'vl_minimo' => 1,
            'vl_maximo' => 5,
            'tipo'=> 2,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 2,
        ]);

        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'd',
            'descricao' => 'De forma geral, como você avalia os compromissos institucionais e esforços existentes no sentido da introdução e manutenção de instrumentos afirmativos de inclusão e de mitigação das disparidades sociais já existentes? Dê uma nota de zero a dez em relação ao nível de compromisso institucional.',
            'legenda' => 'Sendo 1: Baixissimo compromisso e 10: Altíssimo compromisso',
            'vl_minimo' => 1,
            'vl_maximo' => 10,
            'tipo'=> 3,
            'nao_se_aplica'=> false,
            'inverter' => false,
            'id_indicador' => 2,
        ]);

        // RISCOS
        DB::table('avaliacao.risco')->insert([
            'vl_alto' => 11,
            'vl_baixo' => 22,
            'id_indicador' => 1,
        ]);
        DB::table('avaliacao.risco')->insert([
            'vl_alto' => 11,
            'vl_baixo' => 22,
            'id_indicador' => 2,
        ]);
        DB::table('avaliacao.risco')->insert([
            'vl_alto' => 11,
            'vl_baixo' => 22,
            'id_indicador' => 3, // indicador 2.1
        ]);
        DB::table('avaliacao.risco')->insert([
            'vl_alto' => 13,
            'vl_baixo' => 23,
            'id_indicador' => 4, // indicador 2.2
        ]);
        // AUTOR
        DB::table('avaliacao.autor')->insert([
            'nome' => 'Jorge',
        ]);
        DB::table('avaliacao.autor')->insert([
            'nome' => 'Maycon',
        ]);
        // FORMATO_RECURSO
        DB::table('avaliacao.formato_recurso')->insert([
            'nome' => 'pdf',
        ]);
        DB::table('avaliacao.formato_recurso')->insert([
            'nome' => 'img',
        ]);
        DB::table('avaliacao.formato_recurso')->insert([
            'nome' => 'doc',
        ]);
        // TIPO_RECURSO
        DB::table('avaliacao.tipo_recurso')->insert([
            'nome' => 'Artigo',
        ]);
        DB::table('avaliacao.tipo_recurso')->insert([
            'nome' => 'Blog',
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
            'nome' => 'Recurso 2',
            'ultimo_acesso' => Carbon::parse('2000-01-01'),
            'esfera' => 'Area de atuacao 2',
            'id_tipo_recurso' => 1,
            'id_formato' => 2,
            'status' => 1
        ]);
        DB::table('avaliacao.recurso')->insert([
            'nome' => 'Recurso 3',
            'ultimo_acesso' => Carbon::parse('2000-01-01'),
            'esfera' => 'Area de atuacao 2',
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
            'idioma' => 'Inglês',
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
            'id_recurso' => 1,
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
        DB::table('avaliacao.indicacao')->insert([
            'id_indicador' => 3,
            'id_recurso' => 2,
        ]);
        DB::table('avaliacao.indicacao')->insert([
            'id_indicador' => 4,
            'id_recurso' => 1,
        ]);

    }
}

