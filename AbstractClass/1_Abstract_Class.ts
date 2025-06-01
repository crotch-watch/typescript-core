type Holiday = {
  date: Date;
  reason: string;
};

// abstract classes can't be instantiated
// make any class 'abstract' by prepending 'abstact'
// protected constructor makes sense as no instance
// only child classes inheriting from this would call it's constructor

// NOTE: abstract classes are abstract blueprint for it's sub-classes
// same can be said for classes but classses are concrete implementation
// abstract classes are for def. of structure of sub-classes.
// but the implementation is missing that must be done within the inheriting sub-class itself

// just like a type string is to value i.e. let string: string = "string"
// type string is a broad abstract, concept initialization of string to value is a concrete implementation
// analagous to abstract class and class

// NOTE: why abstract class over class with some values and type annotations and inheriting from that class ?
// one reason could be that this entire concept process could be offloaded to TS and wouldn't exist on runtime
// keeping the JS code leaner and cleaner while having strictly typed class implementations.
// decoupling types entire from implementaion
abstract class Department {
  // remove protect access modifier to view the intantiation error
  protected constructor(protected name: string) {}
  protected abstract holidays: Holiday[];
}

const department = new Department("myself");
//                 ^? TS error can't instantiate an abstract class

class ItDepartment extends Department {
  protected holidays = [];
}

class AdminDepartment extends Department {
  protected holidays = []
}