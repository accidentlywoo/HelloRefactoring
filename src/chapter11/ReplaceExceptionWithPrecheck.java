public ResourcePool{
    public Resource get(){
        Resource result;
        if(available.isEmpty()){
            result = Resource.create();
            allocated.add(result);
        }else{
            try{
                result = available.pop();
                allocated.add(result);
            }catch(NoSuchElementException e) {
            }
        }
        return result;
    }
    private Deque<Resource> available;
    private List<Resource> allocated;
}