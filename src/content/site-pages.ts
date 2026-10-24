export interface SiteSection {
  title: string;
  paragraphs: string[];
  items?: string[];
}

export interface SitePage {
  path: string;
  title: string;
  intro: string;
  sections: SiteSection[];
}

export const sitePages: SitePage[] = [
  {
    path: '/privacidade',
    title: 'Política de privacidade',
    intro: 'Esta política explica quais dados o Gestão Pro trata, para que servem e quais escolhas você tem sobre eles.',
    sections: [
      {
        title: 'Quem trata os dados',
        paragraphs: [
          'O Gestão Pro é a plataforma de gestão para pequenos negócios. Os dados da sua conta e do seu negócio são tratados para prestar o serviço que você contratou.',
        ],
      },
      {
        title: 'Dados que coletamos',
        paragraphs: ['Coletamos apenas o que é necessário para a conta funcionar e para a gestão do negócio.'],
        items: [
          'Cadastro: nome, e-mail e senha.',
          'Perfil: nome do negócio e telefone, quando você informa.',
          'Operação: produtos, estoque, vendas, despesas, clientes, categorias e relatórios gerados a partir desses registros.',
          'Uso técnico: registros de acesso necessários para segurança e funcionamento da conta.',
        ],
      },
      {
        title: 'Para que usamos',
        paragraphs: ['Usamos esses dados para entregar o serviço e mantê-lo seguro.'],
        items: [
          'Criar e autenticar a sua conta.',
          'Registrar vendas, estoque, despesas e clientes.',
          'Calcular totais, CMV e lucro dos produtos.',
          'Enviar avisos sobre a conta, o plano e a segurança.',
          'Cumprir obrigações legais quando houver.',
        ],
      },
      {
        title: 'Com quem compartilhamos',
        paragraphs: [
          'Não vendemos dados pessoais. O compartilhamento acontece só com quem ajuda a operar a plataforma, como hospedagem e meio de pagamento, ou quando a lei exigir.',
          'Os dados do seu negócio ficam vinculados à sua conta e não são misturados com os de outros clientes.',
        ],
      },
      {
        title: 'Por quanto tempo guardamos',
        paragraphs: [
          'Mantemos os dados enquanto a conta existir e pelo período necessário para cumprir obrigações legais, resolver disputas e proteger o serviço. Quando a conta é encerrada, os dados são eliminados ou anonimizados, salvo o que a lei mandar conservar.',
        ],
      },
      {
        title: 'Seus direitos',
        paragraphs: ['Você pode pedir, a qualquer momento:'],
        items: [
          'Confirmação e acesso aos dados da conta.',
          'Correção de informações incompletas ou desatualizadas.',
          'Exclusão dos dados, quando a lei permitir.',
          'Informação sobre com quem os dados foram compartilhados.',
        ],
      },
      {
        title: 'Segurança e cookies',
        paragraphs: [
          'A senha é armazenada de forma protegida e o acesso à conta usa sessão autenticada. O navegador também guarda a sessão para você continuar conectado. Não usamos isso para vender publicidade.',
        ],
      },
      {
        title: 'Atualizações e contato',
        paragraphs: [
          'Se esta política mudar de forma relevante, a nova versão passa a valer a partir da data publicada nesta página.',
          'Para exercer um direito ou tirar dúvida sobre privacidade, use os canais oficiais do Gestão Pro indicados na plataforma.',
        ],
      },
    ],
  },
  {
    path: '/termos',
    title: 'Termos de uso',
    intro: 'Estes termos descrevem as regras para usar o Gestão Pro. Ao criar uma conta ou entrar na plataforma, você concorda com eles.',
    sections: [
      {
        title: 'A conta é sua',
        paragraphs: [
          'Você informa dados verdadeiros no cadastro e mantém a senha em sigilo. Tudo o que acontecer com o seu acesso é de sua responsabilidade, inclusive registros feitos por quem usar a sua conta.',
        ],
      },
      {
        title: 'O que a plataforma faz',
        paragraphs: [
          'O Gestão Pro ajuda a organizar produtos, estoque, vendas, despesas, clientes e relatórios. Os números de lucro e CMV usam os preços e as quantidades que você lança.',
          'A plataforma não substitui contador, nota fiscal nem obrigação fiscal. Confira os resultados antes de usá-los em decisões ou declarações.',
        ],
      },
      {
        title: 'Uso permitido',
        paragraphs: ['Use o serviço para a gestão do seu negócio. Não é permitido:'],
        items: [
          'Acessar a conta de outra pessoa sem autorização.',
          'Tentar quebrar, sobrecarregar ou contornar a segurança.',
          'Publicar conteúdo ilegal ou usar o serviço para fraude.',
        ],
      },
      {
        title: 'Planos e dados do negócio',
        paragraphs: [
          'Há um plano gratuito e planos pagos, com os limites exibidos na página de planos. Recursos de um plano pago ficam disponíveis enquanto a assinatura estiver ativa.',
          'Produtos, vendas, clientes e despesas que você cadastra continuam sendo seus. O Gestão Pro os trata para prestar o serviço, conforme a política de privacidade.',
        ],
      },
      {
        title: 'Disponibilidade e encerramento',
        paragraphs: [
          'O serviço é oferecido como está, com esforço razoável de mantê-lo no ar. Pode haver interrupção para manutenção ou por falha de terceiros.',
          'Você pode deixar de usar a plataforma quando quiser. Podemos suspender uma conta que viole estes termos ou coloque outras pessoas em risco.',
        ],
      },
      {
        title: 'Mudanças nestes termos',
        paragraphs: [
          'Estes termos podem ser atualizados. A versão publicada nesta página é a que vale, a partir da data indicada no topo.',
        ],
      },
    ],
  },
  {
    path: '/guia',
    title: 'Guia de uso',
    intro: 'Um caminho curto para começar a vender, controlar o estoque e enxergar o lucro do negócio no Gestão Pro.',
    sections: [
      {
        title: '1. Crie a conta',
        paragraphs: [
          'Na tela de entrada, escolha Cadastrar, informe nome, e-mail e uma senha forte. O nome do negócio é opcional e pode ser completado depois no perfil.',
        ],
      },
      {
        title: '2. Cadastre os produtos',
        paragraphs: [
          'Em Produtos, crie cada item com preço de custo, preço de venda e quantidade em estoque. O preço de custo entra no CMV. Se a matéria-prima já foi lançada em Despesas, deixe esse custo de fora e registre só os outros custos do produto.',
        ],
      },
      {
        title: '3. Registre uma venda',
        paragraphs: [
          'Em Vendas, abra Nova Venda. Escolha o produto, a quantidade e o preço. O resumo no fim mostra o total, o CMV e o lucro dos produtos antes de finalizar.',
          'Se o produto ainda não existe, use Criar novo produto. A venda em andamento fica guardada e volta preenchida quando o cadastro termina.',
        ],
      },
      {
        title: '4. Lance as despesas',
        paragraphs: [
          'Em Despesas, registre o que o negócio gastou. Uma despesa recorrente passa a contar a partir da data em que foi cadastrada, sempre com o valor atual, nos filtros da dashboard e dos relatórios.',
        ],
      },
      {
        title: '5. Acompanhe o resultado',
        paragraphs: [
          'Clientes podem ser ligados a uma venda, e categorias agrupam os produtos. A dashboard e os relatórios separam o lucro dos produtos do resultado da operação, que também desconta as despesas.',
        ],
      },
    ],
  },
];

export function findSitePage(path: string) {
  const normalized = path.replace(/\/$/, '') || '/';
  return sitePages.find((page) => page.path === normalized);
}
