    void validarletraZ(string) 
        //1 - Verificar se a String possui a primeira letra Z
        if (string == null) {
            throw new RuntimeException("Erro");
        }
        //2- Verificar se a String esta vazia
        if (string.isEmpty()) {
            throw new RuntimeException("Erro");
        }
        //3 - Verificar se a String nao possui alguma outra letra do alfabeto menos o Z
        if (string.trim().isEmpty()) {
            throw new RuntimeException("Erro string");
            } 
    