# Gerando um build para o deploy no GitHub Pages:
    ng build --prod --base-href "https://journey-dev-br.github.io/journey-api/"
    Obs.: Não executar para o journey-api
          -------------------------------

# Deployando no GitHub Pages:
    ngh --branch=gh-pages

# URL do site publicado no GitHub Pages:
    https://journey-dev-br.github.io/journey-api/

# Exemplo de URL para a API:
https://journey-dev-br.github.io/journey-api/prod/areas.json
https://journey-dev-br.github.io/journey-api/desenv/areas.json



# INSTALAÇÃO INICIAL DO GH-PAGES:
# ==============================

# Instalar o gh-pages:
    ng add angular-cli-ghpages

# Alterar no angular.json:
    "outputPath": "dist/work-dev-br",
#   para
    "outputPath": "dist",
